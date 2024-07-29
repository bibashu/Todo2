import { useTodoContext } from "../provider/TodoProvider";

const TodoList = () => {
  const { todoList, removeTodo } = useTodoContext();
  console.log(todoList);
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => removeTodo(index)} >Supprimer</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
