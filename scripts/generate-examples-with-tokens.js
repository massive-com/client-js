import path from 'path';
import fs from 'fs';
import spec from '../src/openapi.json' assert { type: 'json' }; // Adjust the path to your OpenAPI spec file

const examplesDir = path.join('./examples', 'rest');

if (!fs.existsSync(examplesDir)) fs.mkdirSync(examplesDir);

// Converts snake_case or kebab-case or path-based names to camelCase
const toCamelCase = (str) =>
  str.replace(/[-_\/{}]+(.)?/g, (_, c) => c ? c.toUpperCase() : '').replace(/^[A-Z]/, (m) => m.toLowerCase());

// Converts a string to MASSIVE_TOKEN format with underscores between camelCase words
const toMassiveToken = (str) => {
  // Split camelCase into words
  const words = str.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase().split('_');
  return `MASSIVE_${words.join('_')}`;
};

// Converts camelCase to snake_case for filenames
const toSnakeCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1_$2') // Insert underscore before capital letters
    .replace(/[-\/]/g, '_') // Replace hyphens and slashes with underscores
    .toLowerCase();

Object.entries(spec.paths).forEach(([route, methods]) => {
  Object.entries(methods).forEach(([method, details]) => {
    const operationId = details.operationId || `${method}_${route.replace(/[\/{}]/g, '_')}`;
    const funcName = toCamelCase(operationId);
    const wrapperFuncName = 'example_' + funcName;
    const fileName = toSnakeCase(funcName);

    const generateSnippet = (dir, useTokens = false) => {
      const params = {};
      if (details.parameters) {
        details.parameters.forEach(param => {
          if (param.in === 'query' || param.in === 'path') {
            params[param.name] = useTokens
              ? toMassiveToken(param.name)
              : param.example || `<${param.name}>`;
          }
        });
      }

      let requestBody = null;
      if (details.requestBody?.content) {
        const jsonContent = details.requestBody.content['application/json'];
        if (jsonContent?.example && !useTokens) {
          requestBody = jsonContent.example;
        } else if (jsonContent?.schema?.properties) {
          requestBody = {};
          Object.keys(jsonContent.schema.properties).forEach(key => {
            requestBody[key] = useTokens
              ? toMassiveToken(key)
              : `<${key}>`;
          });
        }
      }

      const snippetLines = [];
      snippetLines.push(`import { restClient } from '@massive.com/client-js';`);
      snippetLines.push('');
      snippetLines.push(`const apiKey = "GLOBAL_MASSIVE_API_KEY";`);
      snippetLines.push(`const rest = restClient(apiKey, 'https://api.massive.com');`);
      snippetLines.push('');
      snippetLines.push(`async function ${wrapperFuncName}() {`);
      snippetLines.push(`  try {`);

      // Determine call format
      const paramKeys = Object.keys(params);
      let callLine;
      if (paramKeys.length === 0 && !requestBody) {
        callLine = `    const response = await rest.${funcName}();`;
      } else if (paramKeys.length === 1 && !requestBody) {
        const val = useTokens ? `"${Object.values(params)[0]}"` : JSON.stringify(Object.values(params)[0]);
        callLine = `    const response = await rest.${funcName}(${val});`;
      } else {
        const merged = { ...params };
        if (requestBody) {
          merged.data = requestBody;
        }

        const paramObjectStr = JSON.stringify(merged, null, 2)
          .replace(/^/gm, '      ')
          .replace(/"([^"]+)":/g, (match, key) => {
            // Only remove quotes from keys that are valid JS identifiers
            return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? `${key}:` : `"${key}":`;
          });

        callLine = `    const response = await rest.${funcName}(\n${paramObjectStr}\n    );`;
      }

      snippetLines.push(callLine);
      snippetLines.push(`    console.log('Response:', response);`);
      snippetLines.push(`  } catch (e) {`);
      snippetLines.push(`    console.error('An error happened:', e);`);
      snippetLines.push(`  }`);
      snippetLines.push(`}`);
      snippetLines.push('');
      snippetLines.push(`${wrapperFuncName}();`);

      const snippetPath = path.join(dir, `${fileName}.js`);
      fs.writeFileSync(snippetPath, snippetLines.join('\n'));
      console.log(`✅ Generated snippet: ${path.relative('.', snippetPath)}`);
    };

    generateSnippet(examplesDir, false);
  });
});
