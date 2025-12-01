import { D1CreateEndpoint } from "chanfana";
import { HandleArgs } from "../../types";
import { TaskModel } from "./base";

export class TaskCreate extends D1CreateEndpoint<HandleArgs> {
  _meta = {
    model: TaskModel,
    fields: TaskModel.schema.pick({
      // this is purposely missing the id, because users shouldn't be able to define it
  name: true,
  supject: true,
  question:true,
  q1: true,
  q2: true,
  q3: true,
  q4: true,
  true:true,
  false: true,
    }),
  };
}
