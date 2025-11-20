import path from 'path';
import fs from 'fs';
import mappings from './operation-mappings.js'; // Import the operationId mappings

const fetchSpec = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch spec: ${response.statusText}`);
  }
  return response.json();
};

const saveSpec = (spec, filename) => {
  const dir = path.dirname(filename);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filename, JSON.stringify(spec, null, 2));
};

const main = async () => {
  const specUrl = 'https://api.massive.com/openapi';
  const specFilename = path.join('./', 'src', 'openapi.json');

  try {
    const spec = await fetchSpec(specUrl);

    const paths = {};
    for (const [path, pathObj] of Object.entries(spec.paths)) {

      // Skip paths marked as drafts
      if (pathObj["x-polygon-draft"]) continue;

      // Skip paths starting with /v1/reference/
      if (path.startsWith('/v1/reference/')) continue;

      // Since all endpoints use GET, process the 'get' method
      const operation = pathObj.get;
      const key = `${path}+${operation.operationId}`; // e.g., "/fed/vX/treasury-yields+TreasuryYields"
      const newOperationId = mappings[key] || operation.operationId; // Rename if mapping exists

      paths[path] = {
        ...pathObj,
        get: {
          ...operation,
          tags: ["default"], // Add default tag
          operationId: newOperationId, // Update operationId
        },
      };
    }

    // Create the cleaned spec with updated paths
    const cleanedSpec = { ...spec, paths };
    saveSpec(cleanedSpec, specFilename);
    console.log(`Spec saved to ${specFilename}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

main();
