echo "Regenerating account client"
CLIENT_DIRECTORY="./src/rest"

echo "Deleting contents of $CLIENT_DIRECTORY"

rm -rf $CLIENT_DIRECTORY

echo "Generating account client..."
openapi-generator-cli generate -g typescript-axios -o $CLIENT_DIRECTORY -i ./src/openapi.json -t ./templates/typescript-axios --additional-properties=supportsES6=true,stringEnums=true,useSingleRequestParameter=true

echo "Remove unnecessary generator file"
rm openapitools.json

echo "Done!"