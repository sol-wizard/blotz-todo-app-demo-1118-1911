import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <Card className="flex flex-row items-center gap-3 px-4 py-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
          className="h-4 w-4 cursor-pointer"
        />
        <span
          className={`flex-1 ${todo.completed ? "text-muted-foreground line-through" : ""}`}
        >
          {todo.title}
        </span>
        <span className="text-xs text-muted-foreground">
          {new Date(todo.createdAt).toLocaleDateString("en-AU")}
        </span>
        <Button variant="destructive" size="sm" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </Card>
    </li>
  );
}
