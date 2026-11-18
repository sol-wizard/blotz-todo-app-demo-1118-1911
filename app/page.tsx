import Link from "next/link";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-md">
        <div className="mb-6 flex items-baseline justify-between">
          <h1 className="text-3xl font-bold text-gray-900">My To-dos</h1>
          <Link href="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </div>
        <TodoList />
      </div>
    </main>
  );
}
