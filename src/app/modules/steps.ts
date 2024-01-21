import {Task} from "./task";
import {Status} from "./status";

export interface Steps{
  id_step?: BigInt,
  deadline: Date,
  description: String,
  set_date: Date,
  id_status: Array<Status>,
  id_task: Array<Task>;
}
