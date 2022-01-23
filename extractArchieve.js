const AdmZip = require("adm-zip");
const path = require('path');

async function extractArchieve(filepath) {
    try {
        const zip = new AdmZip(filepath);
        const outputDir = `${path.parse(filepath).name}_extracted`;
        zip.extractAllTo(outputDir);
    } catch (error) {
        console.log(`Error extracting ${error}`);
    }
}

extractArchieve('./test.zip');