const AdmZip = require('adm-zip');

async function readZipArchieve(filepath) {
    try {
        const zip = new AdmZip(filepath);
        for ( const zipEntry of zip.getEntries()) {
            // console.log(zipEntry.toString()) // metadata of zip
            console.log(zipEntry.name); // displays the context of the zip
            // console.log(zipEntry.isDirectory); // Boolean of is directory
            // console.log(zipEntry.getData());
        }
    } catch (error) {
        console.log(`Error unzipping ${error}`);
    }
}

readZipArchieve("./test.zip");