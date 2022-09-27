export enum ActionType {
  ADD_USER = "ADD_USER",
  DELETE_USER = "DELETE_USER",
  UPDATE_USER = "UPDATE_USER",
}

export interface User {
  name: string;
}

interface AddUser {
  type: ActionType.ADD_USER;
  payload: User;
}

interface DeleteUser {
  type: ActionType.DELETE_USER;
  payload: number;
}

interface UpdateUser {
  type: ActionType.UPDATE_USER;
  payload: { user: User; index: number };
}

export type Action = AddUser | DeleteUser | UpdateUser;
