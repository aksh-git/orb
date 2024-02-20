import React from "react";

export default function Steps() {
  return (
    <section className="container mx-auto bg-primary px-8 pt-8 pb-12 rounded-2xl">
      <h1 className="text-center text-3xl font-semibold">Create Résumé  In 3 Easy Steps</h1>
      <div className="mt-10 flex justify-center">
        <div className="flex flex-wrap gap-10 lg:justify-center">
          <div className="relative self-start pl-14 w-full lg:w-[250px]">
            <div className="text-lg font-bold">
              <div className="bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50">
                  <div className="text-primary -mt-0.5 text-2xl">1</div>
                </div>
              </div>
              Fill up you details
            </div>
            <div className="text-slate-200">to create from scratch</div>
          </div>
          <div className="relative self-start pl-14 w-full lg:w-[250px]">
            <div className="text-lg font-bold">
              <div className="bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50">
                  <div className="text-primary -mt-0.5 text-2xl">2</div>
                </div>
              </div>
              Preview design
            </div>
            <div className="text-slate-200">and make edits</div>
          </div>
          <div className="relative self-start pl-14 w-full lg:w-[250px]">
            <div className="text-lg font-bold">
              <div className="bg-primary absolute left-0 top-1 flex h-10 w-10 select-none items-center justify-center rounded-full p-[3.5px] opacity-80">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50">
                  <div className="text-primary -mt-0.5 text-2xl">3</div>
                </div>
              </div>
              Download new resume
            </div>
            <div className="text-slate-200">and apply with confidence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
