"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { taskSchema, TaskFormValues } from "@/lib/schema";

interface AddTaskDialogProps {
  onSave: (title: string) => Promise<void>;
}

export default function AddTaskDialog({ onSave }: AddTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: "" },
  });

  async function onSubmit(values: TaskFormValues) {
    await onSave(values.title);
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button className="mb-4" />}>Add Task</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>New task</DialogTitle>
          </DialogHeader>
          <Controller
            name="title"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  {...field}
                  id="title"
                  autoFocus
                  aria-invalid={fieldState.invalid}
                  placeholder="What do you need to do?"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
          <DialogFooter>
            <DialogClose render={<Button type="button" variant="outline" />}>
              Cancel
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
