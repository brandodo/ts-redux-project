import { Action, ActionType, User } from "../actions/actionTypes";

const initState: User[] = [];

export const userReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_USER:
      return [...state, action.payload];

    case ActionType.DELETE_USER:
      const deleteTemp = [...state];
      deleteTemp.splice(action.payload, 1);
      return deleteTemp;

    case ActionType.UPDATE_USER:
      const updateTemp = [...state];
      const { user, index } = action.payload;

      updateTemp.splice(index, 1, user);
      return updateTemp;

    default:
      return state;
  }
};
