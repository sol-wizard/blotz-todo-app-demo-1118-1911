import { Todo } from "@/types/todo";

const API_URL = "http://localhost:3001/todos";

export async function getAllTodos(): Promise<Todo[]> {
  const res = await fetch(API_URL, { cache: "no-store" });
  return res.json();
}

export async function addTodo(title: string): Promise<Todo> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: crypto.randomUUID(), title, completed: false }),
  });
  return res.json();
}
