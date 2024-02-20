"use react";
import { useAppSelector } from "lib/redux/hooks";
import { selectResume } from "lib/redux/resumeSlice";
import React, { ReactHTMLElement, useEffect, useRef } from "react";
import {
  selectFormToShow,
  selectSettings,
  selectFormToHeading,
} from "lib/redux/settingsSlice";
import { MailIcon, PhoneIcon, Globe, MapPinIcon } from "lucide-react";
import type {
  Resume,
  ResumeEducation,
  ResumeProject,
  ResumeWorkExperience,
} from "lib/redux/types";
import Project from "./out/Project";
import Work from "./out/Work";
import Education from "./out/Education";
import Heading from "./out/Heading";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function Resume({ print = false }: { print?: boolean }) {
  const resume = useAppSelector(selectResume);
  const formToHeading = useAppSelector(selectFormToHeading);
  const settings = useAppSelector(selectSettings);
  const formsToShow = useAppSelector(selectFormToShow);

  const contentRef = useRef<HTMLDivElement | null>(null); // Explicitly define the type

  const generatePdf = () => {
    const input = contentRef.current;

    if (input instanceof HTMLElement) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210; // A4 width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save(
          `orb-${basics.name
            .toLocaleLowerCase()
            .replaceAll(" ", "-")}-${new Date().getTime()}.pdf`
        );
      });
    } else {
      console.error("Ref not assigned to an HTML element");
    }
  };

  useEffect(() => {
    if (print && window && contentRef && resume) {
      generatePdf();
    }
  }, [print]);

  const {
    awards,
    basics,
    certificates,
    education,
    interests,
    languages,
    projects,
    publications,
    references,
    skills,
    volunteer,
    works,
  } = resume;

  return (
    <div className="flex justify-center w-full md:max-h-[calc(100vh-var(--top-nav-bar-height))]">
      <section className="flex w-full overflow-hidden">
        <div
          className={`${
            print ? "max-w-4xl" : "max-w-6xl"
          } p-[var(--resume-padding)] no-scrollbar overflow-y-scroll`}
        >
          <div
            ref={contentRef}
            className={`${
              print ? "" : "bg-gray-100 "
            } w-full space-y-8 px-[var(--resume-padding)]`}
          >
            {/* <!-- top content --> */}
            <div className="flex w-full gap-8 px-[var(--resume-padding)]">
              {basics.image && (
                <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3"></div>
              )}

              <div className="w-full sm:text-center mt-10 text-start ">
                <p className="font-bold text-start text-heading sm:text-4xl text-2xl">
                  {basics.name}
                </p>
                {/* <!-- Summary --> */}
                <p className="text-base text-start">{basics.summary}</p>
              </div>
            </div>

            {/* <!-- main content --> */}
            <div className="p-[var(--resume-padding)]">
              <div className="grid grid-cols-12 gap-4">
                <div className="flex flex-col col-span-5">
                  {/* <!-- My contact --> */}
                  <div className="py-3 sm:order-none order-3">
                    <Heading>{"Conatct"}</Heading>
                    <div>
                      {basics.location && (
                        <div className="flex items-center my-1 gap-2">
                          <MapPinIcon className="w-5 h-5" />
                          <div>{basics.location}</div>
                        </div>
                      )}
                      {basics.email && (
                        <div className="flex items-center gap-2">
                          <MailIcon className="w-5 h-5" />
                          <div className="truncate">{basics.email}</div>
                        </div>
                      )}
                      {basics.phone && (
                        <div className="flex items-center my-1 gap-2">
                          <PhoneIcon className="w-5 h-5" />
                          <div>{basics.phone}</div>
                        </div>
                      )}
                      {basics.url && (
                        <div className="flex items-center my-1 gap-2">
                          <Globe className="w-5 h-5" />
                          <div>{basics.url}</div>
                        </div>
                      )}

                      {/*  TODO : ADD socials here*/}
                    </div>
                  </div>
                  {/* <!-- Skills --> */}
                  {skills && skills[0] !== "" && (
                    <div className="py-3 sm:order-none order-2">
                      <Heading>{formToHeading.skills}</Heading>
                      <ul className="list-disc pl-5">
                        {skills.map((skill: any) => {
                          return (
                            <li key={skill} className=" capitalize">
                              {skill}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {/* <!-- Education Background --> */}
                  {education && (
                    <div className="py-3 sm:order-none order-1">
                      <Heading>{formToHeading.education}</Heading>
                      <div className="flex flex-col space-y-1">
                        {education &&
                          education.map((edu: ResumeEducation) => {
                            return (
                              <Education key={edu.startDate} education={edu} />
                            );
                          })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col col-span-6">
                  {/* <!-- Professional Experience --> */}
                  <div className="py-3">
                    <Heading>{formToHeading.works}</Heading>
                    <div className="flex flex-col">
                      {works &&
                        works.map((work: ResumeWorkExperience) => {
                          return <Work key={work.organization} work={work} />;
                        })}
                    </div>
                  </div>

                  {/* <!-- Projects --> */}
                  {projects && (
                    <div className="py-3">
                      <Heading>{formToHeading.projects}</Heading>
                      <div className="flex flex-col">
                        {projects.map((project: ResumeProject) => {
                          return (
                            <Project key={project.name} project={project} />
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
