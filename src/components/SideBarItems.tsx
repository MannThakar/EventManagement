"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({ isCollapse, data, setShowSidebar }: any) => {
  const pathname = usePathname();

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
        <span className="w-1.5 h-full bg-(--auth-pages-bg) top-0 left-0 absolute rounded-r-lg hidden lg:block"></span>
      )}

      <Link
        href={data.path}
        onClick={() => setShowSidebar(false)}
        className={clsx(
          "flex gap-3 w-full text-sm font-semibold rounded-lg items-center",
          {
            "bg-(--auth-pages-bg) text-white": isActive,
            "text-(--primary-text-color) hover:bg-gray-100": !isActive,
            "py-4 px-4.5 lg:px-5": !isCollapse,
            "py-4 px-4.5": isCollapse,
          },
        )}
      >
        <span className="text-lg flex items-center justify-center min-w-5">
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
