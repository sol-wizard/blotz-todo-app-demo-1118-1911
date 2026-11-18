import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo)}
        className="h-4 w-4 cursor-pointer"
      />
      <span
        className={`flex-1 ${todo.completed ? "text-gray-400 line-through" : "text-gray-800"}`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="rounded px-2 py-1 text-sm text-red-500 hover:bg-red-50"
      >
        Delete
      </button>
    </li>
  );
}
