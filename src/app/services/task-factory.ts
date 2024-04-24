import {Task} from "../modules/task";
import {Status} from "../modules/status";
import {StepsService} from "./steps.service";

export function createTaskWithSteps(taskData: Task, stepsService: StepsService): Task {
  const task: Task = {
    status: Status[],
    taskId: taskData.taskId,
    description: taskData.description,
    dueDate: taskData.dueDate,
    setDate: taskData.setDate,
    title: taskData.title,
    steps: [] // Inicjujemy pustą tablicę kroków
  };

  // Pobieramy kroki dla danego zadania i przypisujemy je do pola steps
  stepsService.getSteps(task.taskId).subscribe(
    steps => {
      task.steps = steps;
    },
    error => {
      console.error(`Błąd podczas pobierania kroków dla zadania o id: ${task.taskId}`, error);
    }
  );

  return task;
}
