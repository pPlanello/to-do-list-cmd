const Task = require("./task");

class Tasks {
    _list = {};

    /**
     * Method to get list pretty
     */
    get listArr() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push( task ); 
        });
        return list;
    }

    constructor() {
        this._list = {};
    }

    /**
     * Method to create a new Task
     * 
     * @param {*} desc description task
     */
    createTask(desc = '') {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    /**
     * Method to load a task in class
     * 
     * @param {*} tasks to load in class 
     */
    loadTaskFromArray(tasks = []) {
        tasks.forEach(task => this._list[tasks.id] = task);
    }

    /**
     * Method to show all the tasks
     */
    showTasks() {
        console.log('');
        this.listArr.forEach((task, i) => {
            const index = `${i + 1}.green`;
            const {desc, completed} = task;
            const state = (completed) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${index} ${desc} => ${state}`);
        });
    }

    /**
     * Method to show all task by state
     * 
     * @param {*} stateCompleted state completed or pending
     */
    showTasksByState( stateCompleted = true ) {
        console.log('');
        let count = 0;
        this.listArr.forEach(task => {
            const {desc, completed} = task;
            const state = (completed) ? 'Completada'.green : 'Pendiente'.red;
            if (stateCompleted) {
                if (completed) {
                    count += 1;
                    console.log(`${count.toString().green} ${desc} => ${completed}`);
                }
            } else {
                if (!completed) {
                    count += 1;
                    console.log(`${count.toString().green} ${desc} => ${state}`);
                }
            } 
        });
    }

    /**
     * Method to delete by id
     * 
     * @param {*} id 
     */
    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id];
        }
    }

}

module.exports = Tasks;