import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <span>{todo.completed ? "✅" : "⬜"}</span>
      <span className={todo.completed ? "text-gray-400 line-through" : "text-gray-800"}>
        {todo.title}
      </span>
    </li>
  );
}
