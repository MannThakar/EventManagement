"use client";

import { iSideBarProps } from "@/interface/common";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({ data, isCollapse }: iSideBarProps) => {
  const pathname = usePathname();
  if (!data || Object.keys(data).length === 0) return null;
  const isActive =
    data.path === "/" ? pathname === "/" : pathname.startsWith(data.path);

  return (
    <div
      className={clsx(
        "w-full transition-all duration-500 relative overflow-hidden",
        { "px-3 lg:px-6": !isCollapse, "px-3": isCollapse },
      )}
    >
      {isActive && !isCollapse && (
        <span className="w-1.25 h-full bg-(--auth-pages-bg) top-0 left-0 absolute rounded-r-lg hidden lg:block"></span>
      )}

      <Link
        href={data.path}
        className={clsx(
          "flex gap-3 w-full text-sm font-semibold rounded-lg items-center",
          {
            "cursor-not-allowed pointer-events-none": data?.disabled,
          },
          {
            "opacity-50 cursor-not-allowed": data?.disabled,
            "bg-(--auth-pages-bg) text-white": isActive,
            "text-(--primary-text-color) hover:bg-gray-100": !isActive,
            "py-4 px-4.5 lg:px-5": !isCollapse,
            "py-4 px-4.5": isCollapse,
          },
        )}
      >
        <span className="text-lg flex items-center justify-center min-w-5 font-bold">
          {data.icon}
        </span>
        <span
          className={clsx("transition-all text-nowrap hidden lg:block", {
            "translate-x-10 opacity-0": isCollapse,
          })}
        >
          {data.name}
        </span>
      </Link>
    </div>
  );
};

export default SideBarItem;
