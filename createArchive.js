const AdmZip = require('adm-zip');

async function createZipArchieve() {
    try{
        const zip = new AdmZip();
        const outputFile = "test.zip";
        zip.addLocalFolder("./mock-data");
        zip.writeZip(outputFile);
        console.log(`Created ${outputFile} successfully`)
    } catch (e) {
        console.error(e);
    }
}

createZipArchieve();