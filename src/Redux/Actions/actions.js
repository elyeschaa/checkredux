import { ADD_TODO, DELETE_TODO } from "./actions-types";

export const addtodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
