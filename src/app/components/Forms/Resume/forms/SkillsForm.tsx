"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "lib/redux/hooks";
import { changeSkills, selectResumeSkill } from "lib/redux/resumeSlice";
import { BaseForm, Form, FormSection } from "../BaseForm";
import { BulletListTextarea, Input } from "../components/Input";
import { ResumeSkill } from "lib/redux/types";

export default function SkillsForm() {
  const skills = useAppSelector(selectResumeSkill);
  const dispatch = useAppDispatch();
  //const showDelete = skills.length > 1;

  const handleSkillChange = (field: "skills", value: string[]) => {
    dispatch(changeSkills({ field, value }));
    console.log(value);
  };

  return (
    <Form form={"skills"}>
      <FormSection
        form="skills"
        idx={0}
        showDelete={false}
        deleteButtonTooltipText={""}
      >
        <BulletListTextarea
          label=""
          name="skills"
          placeholder={""}
          value={skills}
          labelClassName="col-span-full"
          onChange={handleSkillChange}
        />
      </FormSection>
    </Form>
  );
}
