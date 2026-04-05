import Searchbar from "./SearchBar";
import Button from "./Button";
import { setIsCollapse, useAppContext } from "@/context";
import { RiExpandLeftLine } from "react-icons/ri";
import clsx from "clsx";

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  const { isCollapse } = state;

  return (
    <nav className="w-full bg-(--main-primary-color) border-b border-(--input-border)">
      <div className="w-full flex items-center justify-start">
        <div className="grow flex items-center justify-between gap-3 md:gap-6.5 lg:gap-0 px-4 md:px-7.5 py-2.5">
          <span className="font-black text-xl text-(--auth-pages-bg) block responsive-navbar">
            E<span className="text-(--primary-text-color)">T</span>
          </span>
          <div className="grow lg:w-1/2 flex items-center justify-between gap-6">
            <Button
              type="button"
              className="nav-button-hidden border border-gray-300 p-1.5 rounded-lg"
              onClick={() => setIsCollapse(dispatch, !isCollapse)}
            >
              <RiExpandLeftLine
                className={clsx(
                  "text-gray-500 h-4.5 w-4.5 transition-transform duration-500",
                  {
                    "rotate-180": isCollapse,
                  },
                )}
              />
            </Button>
            <Button className="nav-button-visible"></Button>
            <Searchbar
              placeholder="Search events by title or description..."
              isResponsive
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
