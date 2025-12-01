import { z } from "zod";

export const task = z.object({
  id: z.number(), // بدون .int()
  name: z.string(),
  supject: z.string(),
  question: z.string(),
  q1: z.string(),
  q2: z.string(),
  q3: z.string(),
  q4: z.string(),
  ttrue: z.string(),
  ffalse: z.string(),
});

export const TaskModel = {
  tableName: "tasks",
  primaryKeys: ["id"],
  schema: task,
  serializer: (obj: Record<string, string | number | boolean>) => {
    if (!Number.isInteger(obj.id)) {
      throw new Error("id must be an integer");
    }
    return {
      ...obj,
      completed: Boolean(obj.completed),
    };
  },
  serializerObject: task,
};
