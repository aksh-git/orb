import React from "react";
import { Input, Textarea } from "../components/Input";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeBasics, selectResumeBasics } from "lib/redux/resumeSlice";
import { ResumeBasics } from "lib/redux/types";
import { BaseForm } from "../BaseForm";
import { LucideUser2 } from "lucide-react";

export function BasicsForm() {
  const basics = useAppSelector(selectResumeBasics);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location } = basics;

  const handleBasicsChange = (field: keyof ResumeBasics, value: string) => {
    dispatch(changeBasics({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <span className="col-span-full text-slate-600 text-2xl font-semibold flex items-center gap-2">
          <LucideUser2></LucideUser2> Personal details
        </span>
        <Input
          label="Name"
          labelClassName="col-span-full"
          name="name"
          placeholder="John doe"
          value={name}
          onChange={handleBasicsChange}
        />
        <Textarea
          label="Summary"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Entrepreneur and educator obsessed with making education free for anyone"
          value={summary}
          onChange={handleBasicsChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="hello@world.org"
          value={email}
          onChange={handleBasicsChange}
        />
        <Input
          label="Phone"
          labelClassName="col-span-2"
          name="phone"
          placeholder="12345-67890"
          value={phone}
          onChange={handleBasicsChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="protfolio.com"
          value={url}
          onChange={handleBasicsChange}
        />
        <Input
          label="Location"
          labelClassName="col-span-2"
          name="location"
          placeholder="New Delhi, IN"
          value={location}
          onChange={handleBasicsChange}
        />
      </div>
    </BaseForm>
  );
}
