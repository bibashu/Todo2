import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();
const iniatialTodoListState = ["Learn React Context APi"]
const TodoProvider = ({ children }) => {
    const [todoList, setTodoList] = useState(iniatialTodoListState)
    const getNumberOfTodoItem = () => todoList.length
    const addTodo = (newTodoItem) =>{
        setTodoList([...todoList, newTodoItem])
    }
    const removeTodo = (todoIndex) => {
        const newList = todoList.filter((_, index) => index !== todoIndex)
        setTodoList(newList)
    }
    const contextValue = {
        todoList,
        getNumberOfTodoItem,
        addTodo,
        removeTodo
    }
  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
export const useTodoContext = () => useContext(TodoContext)
export default TodoProvider;
