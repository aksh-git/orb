import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "lib/redux/store";

export interface Settings {
  themeColor: string;
  fontFamily: string;
  fontSize: string;
  documentSize: string;
  formToShow: {
    volunteer: boolean;
    education: boolean;
    awards: boolean;
    certificates: boolean;
    publications: boolean;
    skills: boolean;
    languages: boolean;
    interests: boolean;
    references: boolean;
    projects: boolean;
    works: boolean;
    custom: boolean;
  };
  formToHeading: {
    volunteer: string;
    education: string;
    awards: string;
    certificates: string;
    publications: string;
    skills: string;
    languages: string;
    interests: string;
    references: string;
    projects: string;
    works: string;
    custom: string;
  };
  formsOrder: ShowForm[];
}

export type ShowForm = keyof Settings["formToShow"];
export type GeneralSetting = Exclude<
  keyof Settings,
  "formToShow" | "formToHeading" | "formsOrder" | "showBulletPoints"
>;

export const DEFAULT_THEME_COLOR = "#38bdf8"; // sky-400
export const DEFAULT_FONT_FAMILY = "Roboto";
export const DEFAULT_FONT_SIZE = "11"; // text-base https://tailwindcss.com/docs/font-size
export const DEFAULT_FONT_COLOR = "#171717"; // text-neutral-800

export const initialSettings: Settings = {
  themeColor: DEFAULT_THEME_COLOR,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontSize: DEFAULT_FONT_SIZE,
  documentSize: "Letter",
  formToShow: {
    volunteer: false,
    education: false,
    awards: false,
    certificates: false,
    publications: false,
    skills: false,
    languages: false,
    interests: false,
    references: false,
    projects: false,
    works: false,
    custom: false,
  },
  formToHeading: {
    volunteer: "Volunteer",
    education: "Education",
    awards: "Awards",
    certificates: "Certificates",
    publications: "Publications",
    skills: "Skills",
    languages: "languages",
    interests: "interests",
    references: "References",
    projects: "Projects",
    works: "Work Experience",
    custom: "custom",
  },
  formsOrder: [
    "education",
    "works",
    "skills",
    "projects",
    "publications",
    "references",
    "volunteer",
    "awards",
    "interests",
    "certificates",
    "languages",
    "custom",
  ],
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettings,
  reducers: {
    changeSettings: (
      draft,
      action: PayloadAction<{ field: GeneralSetting; value: string }>
    ) => {
      const { field, value } = action.payload;
      draft[field] = value;
    },
    changeShowForm: (
      draft,
      action: PayloadAction<{ field: ShowForm; value: boolean }>
    ) => {
      const { field, value } = action.payload;
      draft.formToShow[field] = value;
    },
    changeFormHeading: (
      draft,
      action: PayloadAction<{ field: ShowForm; value: string }>
    ) => {
      const { field, value } = action.payload;
      draft.formToHeading[field] = value;
    },
    setSettings: (draft, action: PayloadAction<Settings>) => {
      return action.payload;
    },
  },
});

export const {
  changeSettings,
  changeShowForm,
  changeFormHeading,
  setSettings,
} = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectThemeColor = (state: RootState) => state.settings.themeColor;

export const selectFormToShow = (state: RootState) => state.settings.formToShow;
export const selectShowByForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formToShow[form];

export const selectFormToHeading = (state: RootState) =>
  state.settings.formToHeading;
export const selectHeadingByForm = (form: ShowForm) => (state: RootState) =>
  state.settings.formToHeading[form];

// export const selectFormsOrder = (state: RootState) => state.settings.formsOrder;
// export const selectIsFirstForm = (form: ShowForm) => (state: RootState) =>
//   state.settings.formsOrder[0] === form;
// export const selectIsLastForm = (form: ShowForm) => (state: RootState) =>
//   state.settings.formsOrder[state.settings.formsOrder.length - 1] === form;

export default settingsSlice.reducer;
