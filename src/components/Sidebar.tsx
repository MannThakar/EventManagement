import { useAppContext } from "@/context";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { ALL_ROUTES } from "@/utils/constant";
import SideBarItem from "./SideBarItems";

const Sidebar = () => {
  const { state } = useAppContext();
  const { isCollapse } = state;

  return (
    <div
      className={clsx(
        "w-full h-full bg-white transition-all duration-500 flex flex-col items-start justify-start responsive-sidebar-main-wrapper",
        {
          "max-w-20 lg:max-w-60": !isCollapse,
          "max-w-20": isCollapse,
        },
      )}
    >
      <div className="w-full h-full hide-scrollbar flex flex-col items-start justify-start overflow-auto responsive-sidebar-inner-wrapper transition-all duration-500">
        <div
          className={clsx(
            "w-full flex items-center justify-center transition-all duration-500 min-h-17.5 sidebar-logo-wrapper sticky top-0 bg-white z-30",
            {
              "max-w-20 lg:max-w-60": !isCollapse,
              "max-w-20 active-sidebar": isCollapse,
            },
          )}
        >
          <span className="font-black text-xl text-(--auth-pages-bg) hidden sidebar-logo-main">
            Eventify
          </span>
          {isCollapse ? (
            <span className="font-black text-xl text-(--auth-pages-bg) block sidebar-logo-second">
              E<span className="text-(--primary-text-color)">T</span>
            </span>
          ) : (
            <span className="font-black flex text-xl text-(--auth-pages-bg) sidebar-logo-second">
              Even <span className="text-(--primary-text-color)">tify</span>
            </span>
          )}
        </div>
        <div className="flex items-start justify-start flex-col w-full py-4 gap-1">
          {ALL_ROUTES?.map((item, index) => (
            <SideBarItem
              key={index}
              data={item}
              index={index}
              isCollapse={isCollapse}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
