"use client";
import InputComponent from "@/app/components/InputComponent";
import { useAppDispatch } from "@/app/hooks/useAppDispatch";
import { updateUserInfo } from "@/app/redux/features/auth/authActions";
import { RootState } from "@/app/redux/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SettingsLayout from "./SettingsLayout";
import SaveButton from "./SaveButton";

const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const {
    user: { name, surname, email },
  } = useSelector((state: RootState) => state.auth);

  const [newState, setNewState] = useState({
    name,
    surname,
    email,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserInfo(newState));
  };
  return (
    <SettingsLayout>
      <div className="flex justify-center">
        <form className="flex flex-col gap-2 text-sm" onSubmit={handleSubmit}>
          <InputComponent
            name={"name"}
            labelText="Name"
            value={newState.name}
            onChange={handleChange}
          />

          <InputComponent
            name={"surname"}
            labelText="Surname"
            value={newState.surname}
            onChange={handleChange}
          />

          <InputComponent
            name={"email"}
            labelText="Email"
            value={newState.email}
            onChange={handleChange}
          />

          <SaveButton />
        </form>
      </div>
    </SettingsLayout>
  );
};
export default SettingsPage;
