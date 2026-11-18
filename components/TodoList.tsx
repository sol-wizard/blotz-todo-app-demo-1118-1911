"use client";

import { useQuery } from "@tanstack/react-query";
import AddTaskDialog from "@/components/AddTaskDialog";
import TodoItem from "@/components/TodoItem";
import { addTodo, deleteTodo, getAllTodos, updateTodo } from "@/lib/api";
import { Todo } from "@/types/todo";

export default function TodoList() {
  const { data: todos = [], isPending, isError, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  async function handleAdd(title: string, dueDate?: string) {
    await addTodo(title, dueDate);
    await refetch();
  }

  async function handleToggle(todo: Todo) {
    await updateTodo(todo.id, !todo.completed);
    await refetch();
  }

  async function handleDelete(id: string) {
    await deleteTodo(id);
    await refetch();
  }

  return (
    <>
      <AddTaskDialog onSave={handleAdd} />
      {isPending && <p className="text-muted-foreground">Loading tasks…</p>}
      {isError && (
        <p className="text-destructive">Could not load tasks. Is json-server running?</p>
      )}
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
}
