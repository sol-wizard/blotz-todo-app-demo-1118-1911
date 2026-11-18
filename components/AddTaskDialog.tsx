"use client";

import { useState } from "react";

interface AddTaskDialogProps {
  onSave: (title: string) => Promise<void>;
}

export default function AddTaskDialog({ onSave }: AddTaskDialogProps) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    await onSave(title.trim());
    setTitle("");
    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mb-4 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Add Task
      </button>

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg"
          >
            <h2 className="mb-4 text-lg font-semibold text-gray-900">New task</h2>
            <input
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What do you need to do?"
              className="mb-4 w-full rounded border border-gray-300 px-3 py-2 text-gray-900"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded px-4 py-2 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
