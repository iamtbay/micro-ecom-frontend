"use client";
import InputComponent from "@/app/components/InputComponent";
import React, { useState } from "react";
import SettingsLayout from "../SettingsLayout";
import SaveButton from "../SaveButton";

const ChangePassword = () => {
  const [passwordState, setPasswordState] = useState({
    current_password: "",
    new_password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello change pass");
  };
  return (
    <SettingsLayout>
      <div className="flex justify-center">
        <form className="flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
          <InputComponent
            value={passwordState.current_password}
            name="current_password"
            labelText="Current Password"
            onChange={handleChange}
          />
          <InputComponent
            value={passwordState.new_password}
            name="new_password"
            labelText="New Password"
            onChange={handleChange}
          />
          <SaveButton />
        </form>
      </div>
    </SettingsLayout>
  );
};
export default ChangePassword;
