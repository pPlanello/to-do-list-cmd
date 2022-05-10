const inquirer = require('inquirer');
const { saveDB, readDB } = require('./db/task_DB');
const { inquirerMenu, confirmDialog, readInput, showTaskToDelete, confirm } = require('./helpers/inquirer');
const Tasks = require('./models/tasks');

require('colors');

console.clear();

const main = async() => {
    
    let opt = '';
    const tasks = new Tasks();
    const tasksDB = readDB();
    
    if (tasksDB) {
        tasks.loadTaskFromArray(tasksDB);
    }
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1': // Create task
                const desc = await readInput('Descripción: ');
                tasks.createTask(desc)
            break;
            case '2': // Get Tasks
                tasks.showTasks();
            break;
            case '3': // Get Task Completed
                tasks.showTasksByState(true);
            break;
            case '4': // Get Task Pending
                tasks.showTasksByState(false);
            break;
            case '6': // Delete Task
                const id = await showTaskToDelete(tasks.listArr);
                const isConfirmDelete = confirm('¿Estás seguro?');
                if (isConfirmDelete) {
                    tasks.deleteTask(id);
                }
            break;
        }

        saveDB(tasks.listArr);

        await confirmDialog();

    } while (opt !== '0');
}

main();