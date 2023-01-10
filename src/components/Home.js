import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import todoData from "../data/Todo";
import Form from "./Form";

const Home = () => {
  const [todo, setTodo] = useState(todoData);

  const addTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you wan to delete the ToDo?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="container">
      <Form addTodo={addTodo} />
      <List todo={todo} handleDelete={deleteTodo} />
    </div>
  );
};

export default Home;
