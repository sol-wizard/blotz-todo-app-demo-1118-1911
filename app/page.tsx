import TodoItem from "@/components/TodoItem";
import { Todo } from "@/types/todo";

const todos: Todo[] = [
  { id: "1", title: "Learn React", completed: true },
  { id: "2", title: "Learn Next.js", completed: false },
  { id: "3", title: "Build a to-do app", completed: false },
];

export default function Home() {
  return (
    <main>
      <h1>My To-dos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </main>
  );
}
