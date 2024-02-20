import { Form, FormSection } from "components/Forms/Resume/BaseForm";
import {
  BulletListTextarea,
  Input,
} from "components/Forms/Resume/components/Input";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { selectResumeEducation, changeEducation } from "lib/redux/resumeSlice";

import type { ResumeEducation } from "lib/redux/types";
import type { CreateHandleChangeArgsWithDescriptions } from "components/Forms/Resume/types";

export const EducationsForm = () => {
  const educations = useAppSelector(selectResumeEducation);
  const dispatch = useAppDispatch();
  const showDelete = educations.length > 1;
  const form = "education";

  return (
    <Form form={form} addButtonText="Add institution">
      {educations.map(
        (
          { institution, course, startDate, endDate, score, description },
          idx
        ) => {
          const handleEducationChange = (
            ...[
              field,
              value,
            ]: CreateHandleChangeArgsWithDescriptions<ResumeEducation>
          ) => {
            dispatch(changeEducation({ idx, field, value } as any));
          };

          return (
            <FormSection
              key={idx}
              form={form}
              idx={idx}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete education"
            >
              <Input
                label="Institution"
                labelClassName="col-span-full"
                name="institution"
                placeholder="ABC University"
                value={institution}
                onChange={handleEducationChange}
              />
              <Input
                label="Start Date"
                labelClassName="col-span-3"
                name="startDate"
                placeholder="May 2018"
                value={startDate}
                onChange={handleEducationChange}
              />
              <Input
                label="End Date"
                labelClassName="col-span-3"
                name="endDate"
                placeholder="May 2021"
                value={endDate}
                onChange={handleEducationChange}
              />
              <Input
                label="Degree & Major"
                labelClassName="col-span-4"
                name="course"
                placeholder="Bachelor of Science in Computer Engineering"
                value={course}
                onChange={handleEducationChange}
              />
              <Input
                label="Score"
                labelClassName="col-span-2"
                name="score"
                placeholder="GPA"
                value={score}
                onChange={handleEducationChange}
              />
              <div className="relative col-span-full">
                <BulletListTextarea
                  label="Additional Information (Optional)"
                  labelClassName="col-span-full"
                  name="description"
                  placeholder="Free paragraph space to list out additional activities, courses, awards etc"
                  value={description}
                  onChange={handleEducationChange}
                />
              </div>
            </FormSection>
          );
        }
      )}
    </Form>
  );
};
