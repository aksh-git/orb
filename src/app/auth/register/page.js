"use client";
import React from "react";
import RegisterForm from "components/Forms/Auth/RegisterForm";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";

export default function Register() {
  return (
    <div className="space-y-6">
      <h1 className="text-6xl font-bold text-primary py-1">
        Let&apos;s begin.
      </h1>
      <div className="w-24 p-[0.2rem] bg-primary opacity-70"></div>
      <RegisterForm />
    </div>
  );
}
