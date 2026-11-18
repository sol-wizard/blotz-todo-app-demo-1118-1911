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
    body: JSON.stringify({
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }),
  });
  return res.json();
}

export async function deleteTodo(id: string): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function updateTodo(id: string, completed: boolean): Promise<Todo> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return res.json();
}
