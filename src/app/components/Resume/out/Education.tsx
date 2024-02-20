import React from "react";
import type { ResumeEducation } from "lib/redux/types";

export default function Education({
  education,
}: {
  education: ResumeEducation;
}) {
  const { course, endDate, institution, startDate, description, score } =
    education;

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <p className="font-semibold text-xs text-gray-500">
          {startDate} - {endDate}
        </p>
        <p className="text-sm font-medium">
          <span className="text-slate-900">{institution}</span>
        </p>
        <p className="font-semibold text-xs text-gray-700">{course}</p>
        <p className="font-bold text-xs text-gray-700 mb-2">{score}</p>
      </div>
      {description && description[0] !== "" && (
        <ul className="text-sm pl-4 space-y-1 text-slate-600 list-disc">
          {description.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
