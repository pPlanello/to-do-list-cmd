const inquirer = require('inquirer');
require('colors');

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        messages: '¿Qué desea hacer?',
        choices: [
            { value: '1', name: `${'1.'.green} Crear tarea` },
            { value: '2', name: `${'2.'.green} Listar tareas` },
            { value: '3', name: `${'3.'.green} Listar tareas completadas` },
            { value: '4', name: `${'4.'.green} Listar tareas pendientes` },
            { value: '5', name: `${'5.'.green} Completar tarea(s)` },
            { value: '6', name: `${'6.'.green} Borrar tarea` },
            { value: '0', name: `0. Salir \n`.yellow }
        ]
    }
];

/**
 * Print menu to choice
 * @returns option choice
 */
const inquirerMenu  = async() => {
    console.clear();
    console.log('==============================='.green);
    console.log('     Seleccione una opción    '.green);
    console.log('=============================== \n'.green);

    const { option } = await inquirer.prompt(menuOpts);
    return option;
}

/**
 * 
 */
const confirmDialog = async() => {
    const question = [ 
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'enter'.green} para continuar`
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

/**
 * Method to read the input value
 * 
 * @param {*} message with the content to use
 * @returns the description
 */
const readInput = async(message) => {
    const question = [ 
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0 ) {
                    return 'Por favor inserta un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

module.exports = {
    inquirerMenu,
    confirmDialog,
    readInput
}