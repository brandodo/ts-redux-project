import { bindActionCreators } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../actions/index";

const NameInput: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { addUser } = bindActionCreators(actionCreators, dispatch);

  const updateUserList = (username: string) => {
    addUser({ name: username });
    setName("");
  };

  return (
    <div>
      <h2>Name Input:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => updateUserList(name)}>Add User</button>
    </div>
  );
};

export default NameInput;
