const AdmZip = require('adm-zip');
const fs = require('fs').promises //Makes it async

async function updateArchieve(filepath) {
    try {
        const zip = new AdmZip();
        content = await fs.readFile("./mock-data/file2.txt") // Where its going to add 
        zip.addFile("./mock-data/file2.txt", content); // add another file to the already zip
        zip.writeZip(filepath);
        console.log(`Updated ${filepath} success`); 
    } catch (e) {
        console.log(`Error updating ${e}`)
    }
}

updateArchieve("./test.zip");