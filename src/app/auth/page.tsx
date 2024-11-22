"use client";
import React, { useEffect, useRef, useState } from "react";
import InputComponent from "../components/InputComponent";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { login, register } from "@/app/redux/features/auth/authActions";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { redirect } from "next/navigation";
import ChangeMethodComponent from "./ChangeMethodComponent";

const AuthPage = () => {
  const userState = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  const [authMethod, setAuthMethod] = useState<string>("login");

  const changeMethod = (method: string) => {
    setAuthMethod(method);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((info) => ({
      ...info,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authMethod === "login") {
      dispatch(login(userInfo));
      formRef.current?.reset();
    } else if (authMethod === "register") {
      dispatch(register(userInfo));
      formRef.current?.reset();
    }
  };

  useEffect(() => {
    if (userState.isAuthenticated) {
      redirect("/");
    }
  }, [userState.isAuthenticated, authMethod]);
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex flex-col gap-2 min-h-72 h-200 bg-white-100 w-[75%] rounded-xl p-2 align-center items-center justify-center"
      >
        {authMethod === "register" && (
          <>
            <InputComponent
              name="name"
              value={userInfo.name}
              onChange={onChange}
              labelText="Name"
            />

            <InputComponent
              name="surname"
              value={userInfo.surname}
              onChange={onChange}
              labelText="Surname"
            />
          </>
        )}

        <InputComponent
          name="email"
          value={userInfo.email}
          onChange={onChange}
          labelText="Email"
        />

        <InputComponent
          name="password"
          type="password"
          value={userInfo.password}
          onChange={onChange}
          labelText="Password"
        />

        <button
          type="submit"
          className="bg-lime-400 hover:bg-lime-500 duration-700 rounded-2xl py-2 px-6 text-sm font-medium"
        >
          {authMethod === "login" ? "Login" : "Register"}
        </button>
      </form>
      <ChangeMethodComponent
        authMethod={authMethod}
        changeMethod={changeMethod}
      />
    </div>
  );
};

export default AuthPage;
