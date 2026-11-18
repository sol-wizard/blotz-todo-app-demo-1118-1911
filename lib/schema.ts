import { z } from "zod";

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(50, "Title must be 50 characters or less"),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
