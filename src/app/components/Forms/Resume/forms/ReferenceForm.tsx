import { Form, FormSection } from "components/Forms/Resume/BaseForm";
import { Input, Textarea } from "components/Forms/Resume/components/Input";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeReference, selectResumeReference } from "lib/redux/resumeSlice";

import type { ResumeReference } from "lib/redux/types";

export const ReferenceForm = () => {
  const references = useAppSelector(selectResumeReference);
  const dispatch = useAppDispatch();
  const showDelete = references.length > 1;
  const form = "references";

  return (
    <Form form={form} addButtonText="Add Reference">
      {references.map(
        ({ name, position, contact, organization, summary }, idx) => {
          const handleReferenceChange = (
            field: keyof ResumeReference,
            value: any
          ) => {
            dispatch(changeReference({ idx, field, value } as any));
          };

          return (
            <FormSection
              key={idx}
              form={form}
              idx={idx}
              showDelete={showDelete}
              deleteButtonTooltipText="Delete reference"
            >
              <Input
                label="Full Name"
                labelClassName="col-span-3"
                name="name"
                placeholder="Jhon Sharma"
                value={name}
                onChange={handleReferenceChange}
              />
              <Input
                label="Role"
                labelClassName="col-span-3"
                name="position"
                placeholder="Senior Backend dev."
                value={position}
                onChange={handleReferenceChange}
              />
              <Input
                label="Organization"
                labelClassName="col-span-full"
                name="organization"
                placeholder="ABC Institution"
                value={organization}
                onChange={handleReferenceChange}
              />

              <Input
                label="Contact"
                labelClassName="col-span-full"
                name="contact"
                placeholder="email, phone, linkedin, any social media."
                value={contact}
                onChange={handleReferenceChange}
              />

              <Textarea
                label="Additional Information (Optional summary)"
                labelClassName="col-span-full"
                name="summary"
                placeholder="Free paragraph space to list out additional activities, courses, awards etc"
                value={summary}
                onChange={handleReferenceChange}
              />
            </FormSection>
          );
        }
      )}
    </Form>
  );
};
