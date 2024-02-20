"use client";
import React from "react";
import LoginForm from "components/Forms/Auth/LoginForm";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import Heading from "components/Resume/out/Heading";

export default function Login() {
  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-primary py-1">Login</h1>
      <div className="w-24 p-[0.2rem] bg-primary opacity-70"></div>
      <LoginForm  />
    </div>
  );
}
