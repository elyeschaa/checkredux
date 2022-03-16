import { ADD_TODO, DELETE_TODO } from "../Actions/actions-types";

const initialState = {
  todo: [],
};

export const TaskReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        todo: [...state.todo, { id: Math.random(), ...payload }],
      };
    case DELETE_TODO:
      return {
        todo: state.todo.filter((task) => task.id !== payload),
      };
    default:
      return state;
  }
};
