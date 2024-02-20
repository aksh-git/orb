import { Form, FormSection } from "components/Forms/Resume/BaseForm";
import {
  BulletListTextarea,
  Input,
  Textarea,
} from "components/Forms/Resume/components/Input";

import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  changeCertificates,
  selectResumeCertificate,
} from "lib/redux/resumeSlice";

import type { ResumeCertificate } from "lib/redux/types";

export const CertificatesForm = () => {
  const certificates = useAppSelector(selectResumeCertificate);
  const dispatch = useAppDispatch();
  const showDelete = certificates.length > 1;
  const form = "certificates";

  return (
    <Form form={form} addButtonText="Add Certificate">
      {certificates.map(({ issuer, date, title, url, description }, idx) => {
        const handleCertificateChange = (
          field: keyof ResumeCertificate,
          value: any
        ) => {
          dispatch(changeCertificates({ idx, field, value } as any));
        };

        return (
          <FormSection
            key={idx}
            form={form}
            idx={idx}
            showDelete={showDelete}
            deleteButtonTooltipText="Delete certificate"
          >
            <Input
              label="Title"
              labelClassName="col-span-full"
              name="title"
              placeholder="Fullstack Web Development Workshop"
              value={title}
              onChange={handleCertificateChange}
            />
            <Input
              label="Issuer"
              labelClassName="col-span-4"
              name="issuer"
              placeholder="ABC Institution"
              value={issuer}
              onChange={handleCertificateChange}
            />
            <Input
              label="When"
              labelClassName="col-span-2"
              name="date"
              placeholder="May 2021"
              value={date}
              onChange={handleCertificateChange}
            />
            <Input
              label="Verification URL (Optional)"
              labelClassName="col-span-full"
              name="url"
              placeholder="https://verify.certificates.com/id?=hello"
              value={url}
              onChange={handleCertificateChange}
            />

            <Textarea
              label="Additional Information (Optional)"
              labelClassName="col-span-full"
              name="description"
              placeholder="Free paragraph space to list out additional activities, courses, awards etc"
              value={description}
              onChange={handleCertificateChange}
            />
          </FormSection>
        );
      })}
    </Form>
  );
};
