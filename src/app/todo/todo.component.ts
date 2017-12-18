import { TodoModel } from "./todo.model";
import { Component, OnInit } from "@angular/core"
import { LogService } from "../service/log.service";

@Component({
    selector:'todo-ui',
    templateUrl:'./todo.view.html'
})
export class TodoComponent implements OnInit{
    todos:Array<TodoModel>;
    model:TodoModel;

    constructor(private logService:LogService){
        let persistedTodos = JSON.parse(localStorage.getItem('angular-todos') || '[]');

		// Normalize back into classes
		this.todos = persistedTodos;
    }

    ngOnInit(){
        this.model = new TodoModel("");
    }    

	private updateLocalStorage() {
		localStorage.setItem('angular-todos', JSON.stringify(this.todos));
	}

    add(){
        this.todos.push(this.model);
        this.updateLocalStorage();
        this.model = new TodoModel("");
        this.logService.logInfo("new task added successfully");
    }

    getByStatus(status){
        return this.todos.filter(x=>x.completed==status);
    }

    markAllCompleted(){
        for(let i=0; i < this.todos.length; i++){            
            var data = this.todos[i];
            data.completed = true;
        }

        this.updateLocalStorage();

        this.logService.logInfo("all tasks marked as completed");
    }
}