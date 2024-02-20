import { Form, FormSection } from "components/Forms/Resume/BaseForm";
import {
  BulletListTextarea,
  Input,
} from "components/Forms/Resume/components/Input";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeWorkExperience,
  selectResumeWorkExperience,
} from "lib/redux/resumeSlice";

import type { ResumeWorkExperience } from "lib/redux/types";
import type { CreateHandleChangeArgsWithDescriptions } from "components/Forms/Resume/types";

export const WorkExperenceForm = () => {
  const WorkExperences = useAppSelector(selectResumeWorkExperience);
  const dispatch = useAppDispatch();
  const showDelete = WorkExperences.length > 1;
  const form = "works";

  return (
    <Form form={form} addButtonText="Add work">
      {WorkExperences.map(
        ({ organization, position, startDate, description, endDate }, idx) => {
          const handleEducationChange = (
            ...[
              field,
              value,
            ]: CreateHandleChangeArgsWithDescriptions<ResumeWorkExperience>
          ) => {
            dispatch(changeWorkExperience({ idx, field, value } as any));
          };

          return (
            <FormSection
              key={idx}
              form={form}
              idx={idx}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete Work"
            >
              <Input
                label="Organization"
                labelClassName="col-span-full"
                name="organization"
                placeholder="ABC University"
                value={organization}
                onChange={handleEducationChange}
              />
              <Input
                label="Role"
                labelClassName="col-span-full"
                name="position"
                placeholder="Full Stack developer"
                value={position}
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
                placeholder="Present"
                value={endDate}
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
