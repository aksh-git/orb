"use client";

import Link from "next/link";
import { cx } from "lib/cx";
import { usePathname } from "next/navigation";
import { CogIcon, LucideCloudFog } from "lucide-react";
import { Tooltip } from "./Tooltip";

export default function TopNavBar() {
  const pathName = usePathname();

  return (
    <header
      aria-label="Site Header"
      className={cx(
        `flex h-[var(--top-nav-bar-height)] items-center justify-center border-gray-100 px-3 lg:px-12 sticky ${
          pathName === "/new" ? "bg-white border-b-2" : "backdrop-blur-sm"
        }  top-0  z-20`
      )}
    >
      <div className="max-w-7xl w-full px-2">
        <div className="flex h-10 w-full items-center justify-between">
          <Link href="/">
            <span className="font-bold text-4xl text-primary">orb</span>
          </Link>
          <nav
            aria-label="Site Nav Bar"
            className="flex items-center gap-4 text-sm font-medium"
          >
            {pathName === "/new" ? (
              <Tooltip text={"Save as pdf"}>
                <div className="rounded-full px-6 btn-primary">
                  <Link className="" href={"/save"}>
                    {"Save as .pdf"}
                  </Link>
                </div>
              </Tooltip>
            ) : (
              <Link
                className="rounded-md px-4 py-2 outline outline-1 outline-slate-500 text-slate-500 hover:bg-slate-100 focus-visible:bg-gray-100"
                href={"/new"}
              >
                {"New"}
              </Link>
            )}

            {pathName === "/new" && (
              <Tooltip text={"Save on cloud"}>
                <div className="rounded-full outline outline-2 p-1.5 cursor-pointer">
                  <Link href={"/auth/login"}>
                    <LucideCloudFog className="h-5 w-5" />
                  </Link>
                </div>
              </Tooltip>
            )}

            {pathName === "/new" && (
              <Tooltip text={"Preferences"}>
                <div className="rounded-full p-1.5 outline outline-2 cursor-pointer">
                  <CogIcon className="h-5 w-5" />
                </div>
              </Tooltip>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
