import { useState } from "react";
import { useTodoContext } from "../provider/TodoProvider";

const TodoForm = () => {
  const { getNumberOfTodoItem, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoItem) {
      return;
    }
    addTodo(todoItem);

    setTodoItem("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Number of Todo items: {getNumberOfTodoItem()}</h3>
      <input type="text" onChange={(e) => setTodoItem(e.target.value)} />
      <button  type="submit">Ajouter</button>
    </form>
  );
};

export default TodoForm;
