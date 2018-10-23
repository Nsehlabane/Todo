import { Injectable } from "@angular/core";

@Injectable()

export class ToDo{

    todoItems=[];ListPage
    progressItems=[];
    
    addNewTodo(newItem:string){
        this.todoItems.push(newItem);
    }

    getAllToDoItems(){
        return this.todoItems
    }

    addToProgress(index:number){
        this.progressItems.push(this.todoItems[index])
        // this.removeTaskTodo(index)
    }

    removeTaskTodo(index:number){
        this.todoItems.splice(index,1);
    }

    getAllProgressItems(){
        return this.progressItems;
    }
}