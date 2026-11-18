import { z } from "zod";

function todayString() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

export const taskSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "Title is required")
    .max(50, "Title must be 50 characters or less"),
  dueDate: z
    .string()
    .refine((value) => value === "" || value >= todayString(), {
      message: "Due date can't be in the past",
    }),
});

export type TaskFormValues = z.infer<typeof taskSchema>;
