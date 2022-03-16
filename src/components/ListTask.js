import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../Redux/Actions/actions";

const ListTask = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.TaskReducer.todo);

  const handleDelete = (paylaod) => {
    dispatch(deleteTodo(paylaod));
  };

  return (
    <div>
      {todos.map((task) => (
        <div
          id={task.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div key={task.id}>
            {task.todo}
            <Button variant="danger" onClick={() => handleDelete(task.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTask;
