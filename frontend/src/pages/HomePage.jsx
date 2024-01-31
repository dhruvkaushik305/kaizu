import { NavBar } from "../components/Home/NavBar";
import { TodoBar } from "../components/Home/TodoBar";
import { DisplayTodo } from "../components/Home/DisplayTodo";

export function HomePage() {
  return (
    <div className="h-screen flex flex-col relative">
      <TodoBar />
      <NavBar />
      <DisplayTodo />
    </div>
  );
}
