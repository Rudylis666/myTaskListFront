import {Status} from "./status";
import {Steps} from "./steps";

export interface Task{
  taskId?: BigInt;
  description: String,
  dueDate: Date,
  setDate: Date,
  title: String,
  status: Array<Status>;
  steps?: Steps[];

}
