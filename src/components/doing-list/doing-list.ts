import { ToDo } from './../../Services/ToDoServices';
import { Component } from '@angular/core';


@Component({
  selector: 'doing-list',
  templateUrl: 'doing-list.html'
})
export class DoingListComponent {

  
progressItems=[];
  ToDo: any;
  constructor(private todo:ToDo) {
   this.progressItems=this.todo.getAllProgressItems();
   console.log(this.progressItems)
  }

}
