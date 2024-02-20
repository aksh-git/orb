import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "lib/redux/store";
import type {
  ResumeAward,
  ResumeBasics,
  ResumeCertificate,
  ResumeEducation,
  ResumeInterest,
  ResumeLanguage,
  ResumeProject,
  ResumePublication,
  ResumeReference,
  ResumeVolunteer,
  Resume,
  ResumeWorkExperience,
  ResumeKey,
  ResumeSocialProfile,
} from "lib/redux/types";
import { ShowForm } from "./settingsSlice";

export const initialBasics: ResumeBasics = {
  name: "",
  label: "",
  location: "",
  summary: "",
  profiles: [],
};

export const initialWorkExperience: ResumeWorkExperience = {
  organization: "",
  position: "",
  startDate: "",
  endDate: "",
  description: [],
};

export const initialEducation: ResumeEducation = {
  institution: "",
  course: "",
  startDate: "",
  endDate: "",
  description: [],
  score: "",
};

export const initialProject: ResumeProject = {
  name: "",
  startDate: "",
  description: [],
  url: "",
};

// export const initialSkills: ResumeSkill = {
//   description: [],
// };

export const initialVolunteer: ResumeVolunteer = {
  organization: "",
  position: "",
  url: "",
  startDate: "",
  summary: "",
  description: [],
};

export const initialAwards: ResumeAward = {
  title: "",
  date: "",
  awarder: "",
  summary: "",
};
export const initialCertificates: ResumeCertificate = {
  title: "",
  date: "",
  issuer: "",
  url: "",
  description: "",
};

export const initiaInterest: ResumeInterest = {
  name: "",
  keywords: [],
};
export const initialLanguage: ResumeLanguage = {
  language: "",
  fluency: "",
};

export const initialSocialProfile: ResumeSocialProfile = {
  network: "",
  username: "",
  url: "",
};

export const initiaPublication: ResumePublication = {
  title: "",
  publisher: "",
  releaseDate: "",
  url: "",
  summary: "",
};

export const initiaReference: ResumeReference = {
  name: "",
  position: "",
  contact: "",
  organization: "",
  summary: "",
};

export const initialResumeState: Resume = {
  basics: initialBasics,
  volunteer: [],
  education: [],
  awards: [],
  certificates: [],
  publications: [],
  languages: [],
  interests: [],
  references: [],
  projects: [],
  works: [],
  skills: [],
};

// Keep the field & value type in sync with CreateHandleChangeArgsWithDescriptions (components\ResumeForm\types.ts)
export type CreateChangeActionWithDescriptions<T> = {
  idx: number;
} & (
  | {
      field: Exclude<keyof T, "description">;
      value: string;
    }
  | { field: "description"; value: string[] }
);

// Create slice
export const resumeSlice = createSlice({
  name: "resume",
  initialState: initialResumeState,
  reducers: {
    changeBasics: (
      draft,
      action: PayloadAction<{ field: keyof ResumeBasics; value: any }>
    ) => {
      const { field, value } = action.payload;
      draft.basics[field] = value;
      console.log(field, value);
    },
    changeProjects: (
      draft,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeProject>>
    ) => {
      const { idx, field, value } = action.payload;
      draft.projects[idx][field] = value as any;
    },
    changeEducation: (
      draft,
      action: PayloadAction<CreateChangeActionWithDescriptions<ResumeEducation>>
    ) => {
      const { idx, field, value } = action.payload;
      draft.education[idx][field] = value as any;
    },
    changeWorkExperience: (
      draft,
      action: PayloadAction<
        CreateChangeActionWithDescriptions<ResumeWorkExperience>
      >
    ) => {
      const { idx, field, value } = action.payload;
      draft.works[idx][field] = value as any;
    },
    changeSkills: (
      draft,
      action: PayloadAction<{ field: "skills"; value: string[] }>
    ) => {
      const { value } = action.payload;
      draft.skills = value;
    },

    changeCertificates: (
      draft,
      action: PayloadAction<{
        idx: number;
        field: keyof ResumeCertificate;
        value: any;
      }>
    ) => {
      const { idx, field, value } = action.payload;
      console.log(action.payload);

      draft.certificates[idx][field] = value;
    },
    changeReference: (
      draft,
      action: PayloadAction<{
        idx: any;
        field: keyof ResumeReference;
        value: any;
      }>
    ) => {
      const { idx, field, value } = action.payload;
      draft.references[idx][field] = value;
    },
    // done above
    changeResumeSocialProfiles: (
      draft,
      action: PayloadAction<{
        id: any;
        field: keyof ResumeSocialProfile;
        value: any;
      }>
    ) => {
      const { id, field, value } = action.payload;
      draft.basics.profiles[id][field] = value;
    },
    changeVolunteer: (
      draft,
      action: PayloadAction<{
        id: any;
        field: keyof ResumeVolunteer;
        value: any;
      }>
    ) => {
      const { id, field, value } = action.payload;
      draft.volunteer[id][field] = value;
    },

    setResume: (draft, action: PayloadAction<Resume>) => {
      return action.payload;
    },

    addSectionInForm: (draft, action: PayloadAction<{ form: ShowForm }>) => {
      const { form } = action.payload;
      console.log(form);

      switch (form) {
        case "works": {
          draft.works.push(structuredClone(initialWorkExperience));
          return draft;
        }
        case "references": {
          draft.references.push(structuredClone(initiaReference));
          return draft;
        }
        case "certificates": {
          draft.certificates.push(structuredClone(initialCertificates));
          return draft;
        }
        case "education": {
          draft.education.push(structuredClone(initialEducation));
          return draft;
        }
        case "projects": {
          draft.projects.push(structuredClone(initialProject));
          return draft;
        }
      }
    },
    deleteSectionInFormByIdx: (
      draft,
      action: PayloadAction<{ form: ShowForm; idx: number }>
    ) => {
      const { form, idx } = action.payload;
      if (form !== "skills" && form !== "custom") {
        draft[form].splice(idx, 1);
      }
    },
  },
});

export const {
  changeBasics,
  changeResumeSocialProfiles,
  changeProjects,
  changeEducation,
  changeVolunteer,
  changeCertificates,
  changeWorkExperience,
  changeReference,
  setResume,
  addSectionInForm,
  changeSkills,
  deleteSectionInFormByIdx,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;

export const selectResumeAward = (state: RootState) => state.resume.awards;
export const selectResumeBasics = (state: RootState) => state.resume.basics;
export const selectResumeCertificate = (state: RootState) =>
  state.resume.certificates;
export const selectResumeEducation = (state: RootState) =>
  state.resume.education;
export const selectResumeInterest = (state: RootState) =>
  state.resume.interests;
export const selectResumeLanguage = (state: RootState) =>
  state.resume.languages;
export const selectResumeProject = (state: RootState) => state.resume.projects;
export const selectResumePublication = (state: RootState) =>
  state.resume.publications;
export const selectResumeReference = (state: RootState) =>
  state.resume.references;
export const selectResumeSkill = (state: RootState) => state.resume.skills;
export const selectResumeVolunteer = (state: RootState) =>
  state.resume.volunteer;

export const selectResumeWorkExperience = (state: RootState) =>
  state.resume.works;
export const selectResumeSocialProfile = (state: RootState) =>
  state.resume.basics.profiles;

export default resumeSlice.reducer;
