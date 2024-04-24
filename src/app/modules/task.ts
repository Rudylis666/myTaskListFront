import {Status} from "./status";

export interface Task{
  taskId?: BigInt;
  description: String,
  dueDate: Date,
  setDate: Date,
  title: String,
  status: Array<Status>;

}
