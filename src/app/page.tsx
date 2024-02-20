import Banner from "components/home/Banner";
import Steps from "components/home/Steps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="container px-4">
        <div className="lg:py-10 py-4 h-full w-full">
          <Banner />
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-screen-2xl w-full m-auto p-4 lg:px-12">
          <Steps />
        </div>
      </section>
      <div className="pb-12"></div>
    </>
  );
}
