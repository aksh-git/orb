"use client";
import { ResumeForm } from "components/Forms/Resume";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { Resume } from "components/Resume";

export default function Page() {
  return (
    <Provider store={store}>
      <main className="px-4 relative h-full w-full overflow-hidden ">
        <div className="w-full grid grid-cols-3 md:grid-cols-8">
          <div className="col-span-3">
            <ResumeForm />
          </div>
          <div className="col-span-5">
            <Resume print={false} />
          </div>
        </div>
      </main>
    </Provider>
  );
}
