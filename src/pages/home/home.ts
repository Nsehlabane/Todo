import { ToDo } from './../../Services/ToDoServices';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
newItem:string;
todoItems=[];
progressItems=[];


  constructor(public navCtrl: NavController, private todo:ToDo) {

  }

  addNewTodo(){
    if (this.newItem !==''){
      this.todo.addNewTodo(this.newItem);
      this.newItem='';
      this.getAllToDoItems();
  }

}

  getAllToDoItems(){
  this.todoItems=this.todo.getAllToDoItems()
}

  addToProgress(index:number){
    this.todo.addToProgress(index)
    
}


}