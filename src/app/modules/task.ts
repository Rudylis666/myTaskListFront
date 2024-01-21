import {Status} from "./status";

export interface Task{
  task_id?: BigInt;
  description: String,
  due_date: Date,
  set_date: Date,
  title: String,
  task_status: Array<Status>;

}
