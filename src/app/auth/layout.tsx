import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="container w-full md:max-w-xl p-6">{children}</section>
  );
}
