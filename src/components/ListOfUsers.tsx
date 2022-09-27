import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../reducers";
import { actionCreators } from "../actions/index";
import { bindActionCreators } from "@reduxjs/toolkit";

export const ListOfUsers: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state.users);
  const { deleteUser, updateUser } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const listOfUsers = state.map((user, ind) => (
    <>
      <li key={ind}>{user.name}</li>
      <button onClick={() => deleteUser(ind)}>Remove</button>

      <button onClick={() => updateUser({ name: "Bobby" }, ind)}>Update</button>
    </>
  ));

  return (
    <>
      <h3>Users</h3>
      <ul>{listOfUsers}</ul>
    </>
  );
};
