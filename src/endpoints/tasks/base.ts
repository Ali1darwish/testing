import { z } from "zod";

export const task = z.object({
  id: z.number().int(),
  name: z.string(),
  supject: z.string(),
  question: z.string(),
  q1: z.string(),
  q2: z.string(),
  q3: z.string(),
  q4: z.string(),
  true: z.integer(),
  false: z.integer(),
});

export const TaskModel = {
  tableName: "tasks",
  primaryKeys: ["id"],
  schema: task,
  serializer: (obj: Record<string, string | number | boolean>) => {
    return {
      ...obj,
      completed: Boolean(obj.completed),
    };
  },
  serializerObject: task,
};
