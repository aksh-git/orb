import React from "react";
import type { ResumeWorkExperience } from "lib/redux/types";

export default function Work({ work }: { work: ResumeWorkExperience }) {
  const { description, organization, position, startDate, endDate } = work;
  return (
    <div className="flex flex-col w-full">
      <p className="text-lg font-bold text-gray-700">
        {organization} {position ? "|" : ""} {position}
      </p>
      <p className="font-semibold text-sm text-gray-700">
        {startDate} - {endDate}
      </p>
      {description && (
        <p className="font-semibold text-sm text-gray-700 mt-2 mb-1">
          Key Responsibilities
        </p>
      )}
      {description && (
        <ul className="text-sm pl-4 space-y-1 list-disc">
          {description.map((text, i) => {
            return <li key={i}>{text}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
