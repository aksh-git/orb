"use client";
import { Provider } from "react-redux";
import { store } from "lib/redux/store";
import { Resume } from "components/Resume";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  setTimeout(() => {
    router.back();
  }, 1500);

  return (
    <Provider store={store}>
      <main className="container px-4 relative h-full w-full">
        <Resume print={true} />
      </main>
    </Provider>
  );
}
