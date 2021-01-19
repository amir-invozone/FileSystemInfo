//I got enough time so I have performed some additional work by using appendFile to learn more. (The original task was only to write into file)
require('dotenv').config();
const fs = require('fs');
const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const osPlatform = os.platform();
const upTime = os.uptime();
const dirPath = os.homedir() + '/SystemInfo/';
const filePath = dirPath + process.env.FILE_NAME;

async function checkPath(){
    if(!fs.existsSync(dirPath)){
        console.log('Creating file directory');
          fs.mkdir(dirPath, { recursive: true }, (err) => {
            if (err)
                throw (console.log('Error Creating file directory... ' + err));
          });
    }
    await writeToFile();
};

const checkFile = async() => {
    if(!fs.existsSync(filePath))
        await checkPath();
    else
        await appendToFile();
};

const writeToFile = async() => {
    try {
        console.log('Writing to file...');
        fs.writeFileSync(filePath,
            'Info Time: ' + new Date().toISOString() + os.EOL +
            'Total Memory: ' + totalMemory + os.EOL +
            'Free Memory: ' + freeMemory + os.EOL +
            'Platform: ' + osPlatform + os.EOL +
            'Uptime: ' + upTime + os.EOL +
            '-----------------------------------' + os.EOL
        );
    }
    catch (err){
        throw (console.log('Error writing to file... ' + err));
    }
}

const appendToFile = async() => {
    try {
        console.log('Appending to file...');
        fs.appendFileSync(filePath,
            'Info Time: ' + new Date().toISOString() + os.EOL +
            'Total Memory: ' + totalMemory + os.EOL +
            'Free Memory: ' + freeMemory + os.EOL +
            'Platform: ' + osPlatform + os.EOL +
            'Uptime: ' + upTime + os.EOL +
            '-----------------------------------' + os.EOL
        );
    }
    catch (err){
        throw (console.log('Error appending to file... ' + err));
    }
}

const main = async() => {
    await checkFile();
    console.log('OS info added to file successfully.')
};

main();