const fs = require('fs');


const archive = './db/data.json';

/**
 * Method to save data in file
 * 
 * @param {*} data to save
 */
const saveDB = (data) => {
    fs.writeFileSync(archive, JSON.stringify(data));
}

/**
 * Method to read data in file
 * 
 * @returns {*} data saved
 */
const readDB = () => {
    if (!fs.existsSync(archive)) {
        return null;
    }
    const info = fs.readFileSync(archive, {encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}

module.exports = {
    saveDB,
    readDB
}