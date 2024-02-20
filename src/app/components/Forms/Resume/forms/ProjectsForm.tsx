import React from "react";
import { Form, FormSection } from "components/Forms/Resume/BaseForm";
import { useAppSelector, useAppDispatch } from "lib/redux/hooks";
import { changeProjects, selectResumeProject } from "lib/redux/resumeSlice";
import { BulletListTextarea, Input } from "../components/Input";
import { ResumeProject } from "lib/redux/types";

export function ProjectsForm() {
  const projects = useAppSelector(selectResumeProject);
  const dispatch = useAppDispatch();
  const showDelete = projects.length > 1;

  return (
    <Form form="projects" addButtonText="Add Project">
      {projects.map(({ description, name, startDate, url, endDate }, idx) => {
        const handleProjectChange = (
          field: keyof ResumeProject,
          value: any
        ) => {
          console.log(field, value);

          dispatch(changeProjects({ idx, field, value } as any));
        };
        const showMoveUp = idx !== 0;
        const showMoveDown = idx !== projects.length - 1;

        return (
          <FormSection
            key={idx}
            form="projects"
            idx={idx}
            showDelete={showDelete}
            deleteButtonTooltipText={"Delete project"}
          >
            <Input
              name="name"
              label="Project Name"
              placeholder="orb"
              value={name}
              onChange={handleProjectChange}
              labelClassName="col-span-4"
            />
            <Input
              type="text"
              name="startDate"
              label="Date"
              placeholder="Winter 2022"
              value={startDate}
              onChange={handleProjectChange}
              labelClassName="col-span-2"
            />
            <BulletListTextarea
              labelClassName="col-span-full"
              label="Description"
              name="description"
              placeholder={"Did fun"}
              value={description}
              onChange={handleProjectChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
}
