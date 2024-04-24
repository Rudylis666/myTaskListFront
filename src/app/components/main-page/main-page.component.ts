import { Component } from '@angular/core';
import {Task} from "../../modules/task";
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";
import {Status} from "../../modules/status";
import {Steps} from "../../modules/steps";
import {StepsService} from "../../services/steps.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  tasks: Task[]=[];
  steps: Steps[]=[];
  constructor(private taskService: TaskService, private router: Router, private stepsService: StepsService) {
  }
  ngOnInit(){
    this.loadTasks();
  }
  loadTasks(){
    this.taskService.getTasks().subscribe((data)=>{
      console.log(data);
      this.tasks=data;
      this.tasks.forEach(task => {
        this.stepsService.getSteps(task.taskId).subscribe((steps) => {
          task.steps = steps;
          console.log(task.steps);
        });
      })
      console.log(this.tasks);
    })
  }
  getStatusDescription(taskStatus: Status | Status[]) {
    if (Array.isArray(taskStatus)) {
      if (taskStatus.length > 0) {
        const firstStatus = taskStatus[0];
        if (firstStatus && firstStatus.description) {
          return firstStatus.description;
        } else {
          console.log("SOMETHING WRONG: No description in first status");
          return "";
        }
      } else {
        console.log("SOMETHING WRONG: Empty status array");
        return "";
      }
    }
    // Jeśli taskStatus jest pojedynczym obiektem
    else {
      if (taskStatus && taskStatus.description) {
        return taskStatus.description;
      } else {
        console.log("SOMETHING WRONG: No description in status object");
        return "";
      }
    }
  }
  findStep(taskId: BigInt| undefined): Steps[]{

    console.log("TYTY");
    console.log(taskId);
    if(taskId !== undefined) {
      this.stepsService.getSteps(taskId).subscribe((data) => {
        console.log(data);
        this.steps = data;
        console.log(this.steps);
      });
    }else{
      console.log("TASKID IS UNAVIABLE");
      this.steps=[];
    }
    return this.steps;
  }
}
