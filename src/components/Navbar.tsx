import { BsArrowDown } from "react-icons/bs";
import Searchbar from "./SearchBar";
import Button from "./Button";

import { PiNotificationFill } from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { setIsCollapse, useAppContext } from "@/context";

const NavBar = () => {
  const { state, dispatch } = useAppContext();
  const { isCollapse } = state;

  return (
    <nav className="w-full bg-(--main-primary-color)">
      <div className="w-full flex items-center justify-start">
        <div className="grow flex items-center justify-between gap-3 md:gap-6.5 lg:gap-0 px-4 md:px-7.5 py-2.5">
          <span className="font-black text-xl text-(--auth-pages-bg) block responsive-navbar">
            D<span className="text-(--primary-text-color)">S</span>
          </span>
          <div className="grow lg:w-1/2 flex items-center justify-between lg:justify-start gap-6">
            <Button
              type="button"
              className="nav-button-hidden"
              onClick={() => setIsCollapse(dispatch, !isCollapse)}
            >
              <TiThMenu className="text-black h-6 w-6" />
            </Button>
            <Button className="nav-button-visible"></Button>
            <Searchbar isResponsive placeholder="Search" />
          </div>
          <div className="w-fit lg:w-1/2">
            <div className="flex items-center-safe justify-end w-full gap-6.5">
              <Button
                type="button"
                className="w-6 min-w-6 max-w-6 h-6 min-h-6 max-h-6"
              >
                <PiNotificationFill />
              </Button>
              <div className="hidden lg:flex items-center justify-start gap">
                {/* <DropDown
                  dropdownMenuArray={LANGUAGES}
                  maxHeight={300}
                  dropDownSelectedValue={selectedLanguage}
                  setDropDownSelectedValue={setSelectedLanguage}
                  styleDropdownButton="border-none! pr-6 bg-transparent font-semibold text-[#646464] text-sm cursor-pointer"
                /> */}
              </div>
              {/* ref={dropdownRef} */}
              <div className="relative">
                <div
                  className="flex items-center justify-end gap-6.5 cursor-pointer"
                  //   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center justify-start gap-5">
                    <div className="w-full h-full min-w-10 min-h-10 max-w-10 max-h-10 lg:min-w-12.5 lg:min-h-12.5 lg:max-h-12.5 lg:max-w-12.5 bg-[#D8D8D8] rounded-full overflow-hidden"></div>
                    <div className="hidden lg:flex flex-col items-start justify-start gap-0.5">
                      <span className="text-sm font-bold text-(--dashboard-primary-color) capitalize max-w-25 text-ellipsis whitespace-nowrap overflow-hidden text-nowrap">
                        {/* {userInfoProvider?.name} */}
                      </span>
                      <p className="font-semibold text-xs text-(--dashboard-secondary-color) capitalize">
                        {/* {userInfoProvider?.employee_role} */}
                      </p>
                    </div>
                  </div>
                  <BsArrowDown />
                </div>

                {/* Dropdown Menu */}
                {false && (
                  <div className="absolute right-0 mt-2 min-w-30 max-w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <Button
                      type="button"
                      className="w-full px-4 py-2 text-left text-base text-gray-700 hover:bg-gray-100 flex items-center gap-2 transition-colors"
                    >
                      <span className="w-full flex items-center justify-start gap-2">
                        <span>Logout</span>
                      </span>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
