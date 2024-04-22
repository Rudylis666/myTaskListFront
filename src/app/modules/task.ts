import {Status} from "./status";

export interface Task{
  task_id?: BigInt;
  description: String,
  dueDate: Date,
  setDate: Date,
  title: String,
  task_status: Array<Status>;

}
