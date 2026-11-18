import TodoItem from "@/components/TodoItem";
import { getAllTodos } from "@/lib/api";

export default async function Home() {
  const todos = await getAllTodos();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <h1 className="mb-6 text-3xl font-bold text-gray-900">My To-dos</h1>
        <ul className="flex flex-col gap-2">
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
