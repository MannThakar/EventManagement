import { useAppContext } from "@/context";
import clsx from "clsx";
import { ALL_ROUTES } from "@/utils/constant";
import SideBarItem from "./SideBarItems";
import { iSideBarRoute } from "@/interface/common";

const Sidebar = () => {
  const { state } = useAppContext();
  const { isCollapse } = state;

  return (
    <div
      className={clsx(
        "w-full h-full bg-white transition-all duration-500 flex flex-col items-start justify-start responsive-sidebar-main-wrapper border-r border-(--input-border)",
        {
          "max-w-20 lg:max-w-60": !isCollapse,
          "max-w-20": isCollapse,
        },
      )}
    >
      <div className="w-full h-full hide-scrollbar flex flex-col items-start justify-start overflow-auto responsive-sidebar-inner-wrapper transition-all duration-500 bg-white">
        <div
          className={clsx(
            "w-full flex items-center justify-center transition-all duration-500 max-h-15.75 border-b border-(--input-border) sidebar-logo-wrapper sticky top-0 bg-white z-30 h-full",
            {
              "max-w-20 lg:max-w-60": !isCollapse,
              "max-w-20 active-sidebar": isCollapse,
            },
          )}
        >
          <span className="font-black text-xl text-(--auth-pages-bg) hidden sidebar-logo-main border-b border-(--input-border)">
            Eventify
          </span>
          {isCollapse ? (
            <span className="font-black text-xl text-(--auth-pages-bg) block sidebar-logo-second">
              E<span className="text-(--primary-text-color)">T</span>
            </span>
          ) : (
            <span className="font-black flex text-xl text-(--auth-pages-bg) sidebar-logo-second ">
              Even <span className="text-(--primary-text-color)">tify</span>
            </span>
          )}
        </div>
        <div className="flex items-start justify-start flex-col w-full py-4 gap-1">
          {ALL_ROUTES?.map((item: iSideBarRoute) => (
            <SideBarItem key={item.path} data={item} isCollapse={isCollapse} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
