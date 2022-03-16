import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/Actions/actions";
import { Button } from "react-bootstrap";

const AddTask = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ todo: "", isDone: "" });

  const handleInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  return (
    <div style={{ marginTop: "15px" }}>
      <input
        style={{ width: "50%" }}
        placeholder="Enter your Task"
        onChange={handleInput}
        name="todo"
      />

      <Button
        style={{ width: "100px", height: "40px" }}
        onClick={() => dispatch(addtodo(todo))}
      >
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
