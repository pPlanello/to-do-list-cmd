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
}

module.exports = Tasks;