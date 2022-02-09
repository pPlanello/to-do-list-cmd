const inquirer = require('inquirer');
const { inquirerMenu, confirmDialog, readInput } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

require('colors');

console.clear();

const main = async() => {
    let opt = '';
    const tasks = new Tasks();
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc)
            break;
            case '2':
                console.log(tasks.listArr);
            break;
        }

        await confirmDialog();

    } while (opt !== '0');
}

main();