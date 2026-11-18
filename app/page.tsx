import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todo";

const todos: Todo[] = [
  { id: "1", title: "Learn React", completed: true },
  { id: "2", title: "Learn Next.js", completed: false },
  { id: "3", title: "Build a to-do app", completed: false },
];

export default function Home() {
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
