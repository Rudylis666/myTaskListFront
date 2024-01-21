import { Component } from '@angular/core';
import {Task} from "../../modules/task";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  tasks: Task[]=[];
  constructor(private taskService: TaskService, private router: Router) {
  }
  ngOnInit(){
    this.loadTasks();
  }
  loadTasks(){
    this.taskService.getTasks().subscribe((data)=>{
      console.log(data);
      this.tasks=data;
    })
  }
}
