"use client";

import React, { useState } from "react";
import { INPUT_CLASS_NAME } from "../Resume/components/Input";
import Link from "next/link";
import Toast, { errTypes } from "components/Toast";

export default function LoginForm() {
  const [err, setErr] = useState<{
    errType: errTypes;
    message: string;
  }>();

  const handleFormSubmit = (e: any) => {
    //alert("Hello")
    e.preventDefault();
    setErr({
      errType: errTypes.ERROR,
      message: "Internal server error",
    });
    //Clear the error after 3 seconds
    setTimeout(() => {
      setErr(undefined);
    }, 3000);
  };

  return (
    <>
      {err && (
        <Toast autoDismiss={false} type={err.errType} message={err.message} />
      )}
      <form onSubmit={handleFormSubmit} method="POST" className="w-full">
        <div className="w-full md:max-w-md space-y-4">
          <div>
            <label htmlFor="email" className="font-medium text-lg">
              Email
            </label>
            <input
              className={INPUT_CLASS_NAME}
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium text-lg">
              Password
            </label>
            <input
              className={INPUT_CLASS_NAME}
              type="password"
              name="email"
              id="password"
              placeholder="********"
              required
              minLength={6}
            />
          </div>
          <div className="w-full flex justify-between items-end pt-4">
            <div>
              {"New here? "}
              <Link className="underline" href={"/auth/register"}>
                register
              </Link>
            </div>
            <input
              className="btn-primary cursor-pointer px-6"
              type="submit"
              value="Login"
            />
          </div>
        </div>
      </form>
    </>
  );
}
