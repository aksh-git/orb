import React from "react";
import {
  LucideBuilding,
  BookText,
  Presentation,
  Cog,
  Mic,
  PlusIcon,
  WheatIcon,
  AwardIcon,
  FileBadge,
  NewspaperIcon,
  LanguagesIcon,
  FerrisWheel,
  NetworkIcon,
} from "lucide-react";
import {
  ShowForm,
  changeFormHeading,
  changeShowForm,
  selectHeadingByForm,
  selectShowByForm,
} from "lib/redux/settingsSlice";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import {
  addSectionInForm,
  deleteSectionInFormByIdx,
} from "lib/redux/resumeSlice";
import {
  DeleteIconButton,
  MoveIconButton,
  ShowIconButton,
} from "./components/Button";
import { ExpanderWithHeightTransition } from "components/ExpanderWithHeightTransition";
export const BaseForm = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`flex flex-col gap-3 rounded-md bg-white p-6 pt-4 shadow-md shadow-primary transition-opacity duration-200 ${className}`}
  >
    {children}
  </section>
);

const FORM_TO_ICON: { [section in ShowForm]: typeof LucideBuilding } = {
  works: LucideBuilding,
  education: BookText,
  projects: Presentation,
  skills: Cog,
  custom: Mic,
  volunteer: WheatIcon,
  awards: AwardIcon,
  certificates: FileBadge,
  publications: NewspaperIcon,
  languages: LanguagesIcon,
  interests: FerrisWheel,
  references: NetworkIcon,
};

export const Form = ({
  form,
  addButtonText,
  children,
}: {
  form: ShowForm;
  addButtonText?: string;
  children: React.ReactNode;
}) => {
  const showForm = useAppSelector(selectShowByForm(form));
  const heading = useAppSelector(selectHeadingByForm(form));

  const dispatch = useAppDispatch();
  const setShowForm = (showForm: boolean) => {
    dispatch(changeShowForm({ field: form, value: showForm }));
  };
  const setHeading = (heading: string) => {
    dispatch(changeFormHeading({ field: form, value: heading }));
  };

  const Icon = FORM_TO_ICON[form];

  return (
    <BaseForm
      className={`transition-opacity duration-200 ${
        showForm ? "pb-6" : "pb-2 opacity-60"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex grow items-center gap-2">
          <Icon className="h-6 w-6" aria-hidden="true" />
          <input
            type="text"
            className="block w-full border-b border-transparent text-xl font-semibold tracking-wide outline-none text-slate-600 hover:border-gray-300 hover:shadow-sm focus:border-gray-300 focus:shadow-sm"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-0.5">
          <ShowIconButton show={showForm} setShow={setShowForm} />
        </div>
      </div>
      <ExpanderWithHeightTransition expanded={showForm}>
        {children}
      </ExpanderWithHeightTransition>
      {showForm && addButtonText && (
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => {
              dispatch(addSectionInForm({ form }));
            }}
            className="flex items-center rounded-md bg-white py-2 pl-3 pr-4 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            <PlusIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-slate-600"
              aria-hidden="true"
            />
            {addButtonText}
          </button>
        </div>
      )}
    </BaseForm>
  );
};

export const FormSection = ({
  form,
  idx,
  showDelete,
  deleteButtonTooltipText,
  children,
}: {
  form: ShowForm;
  idx: number;
  showDelete: boolean;
  deleteButtonTooltipText: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteSectionInFormByIdx({ form, idx }));
  };

  return (
    <>
      {idx !== 0 && (
        <div className="mb-4 mt-6 border-t-2 border-dotted border-gray-200" />
      )}
      <div className="relative grid grid-cols-6 gap-3">
        {children}
        <div className={`absolute right-0 top-0 flex gap-0.5 `}>
          <div
            className={`transition-all duration-300 ${
              showDelete ? "" : "invisible opacity-0"
            }`}
          >
            <DeleteIconButton
              onClick={handleDeleteClick}
              tooltipText={deleteButtonTooltipText}
            />
          </div>
        </div>
      </div>
    </>
  );
};
