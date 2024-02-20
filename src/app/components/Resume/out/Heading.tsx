import { cx } from "lib/cx";
import React from "react";

export default function Heading({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={cx("text-xl font-bold text-top-color", className)}>
        {children}
      </h2>
      <div className="border-2 w-20 border-top-color my-3"></div>
    </>
  );
}
