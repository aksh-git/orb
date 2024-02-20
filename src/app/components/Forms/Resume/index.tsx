"use client";
import { cx } from "lib/cx";
import { useState } from "react";
import { BasicsForm } from "./forms/BasicsForm";
import { ProjectsForm } from "./forms/ProjectsForm";
import {
  useAppSelector,
  useSaveStateToLocalStorageOnChange,
  useSetInitialStore,
} from "lib/redux/hooks";
import { EducationsForm } from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";
import { CertificatesForm } from "./forms/CertificateForm";
import { WorkExperenceForm } from "./forms/WorkExperenceForm";
import { ReferenceForm } from "./forms/ReferenceForm";

export const ResumeForm = () => {
  const [isHover, setIsHover] = useState(false);

  useSetInitialStore();
  useSaveStateToLocalStorageOnChange();

  return (
    <div
      className={cx(
        "flex justify-center no-scrollbar scrollbar-track-gray-100 scrollbar-w-3 md:h-[calc(100vh-var(--top-nav-bar-height))] md:justify-end md:overflow-y-scroll border-r-2",
        isHover && "scrollbar-thumb-gray-200"
      )}
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className="flex max-w-2xl flex-col gap-8 p-[var(--resume-padding)] border-primary">
        <BasicsForm />
        <SkillsForm />
        <WorkExperenceForm />
        <ProjectsForm />
        <EducationsForm />
        <ReferenceForm />
        <CertificatesForm />
        <br />
        <div className="w-full p-1"></div>
      </section>
    </div>
  );
};
