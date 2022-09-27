import { Action, ActionType, User } from "./actionTypes";
import { Dispatch } from "redux";

export const addUser = (user: User) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_USER,
      payload: user,
    });
  };
};

export const deleteUser = (index: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_USER,
      payload: index,
    });
  };
};

export const updateUser = (user: User, index: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE_USER,
      payload: { user, index },
    });
  };
};
