import React from "react";
import type { ResumeProject } from "lib/redux/types";

export default function Project({ project }: { project: ResumeProject }) {
  const { description, name, startDate, url, endDate } = project;
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-semibold text-gray-700">{name}</p>
      <ul className="font-normal text-sm text-gray-700 mb-1 list-disc pl-5">
        {description.map((text, i) => {
          return <li key={i}>{text}</li>;
        })}
      </ul>
    </div>
  );
}
