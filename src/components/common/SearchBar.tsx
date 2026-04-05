import { setSearch, useAppContext } from "@/context";
import { iSearchbarProps } from "@/interface/common";
import clsx from "clsx";

import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Searchbar = ({
  placeholder,
  isResponsive,
  className = "",
}: iSearchbarProps) => {
  const { state, dispatch } = useAppContext();
  const { search } = state;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(dispatch, value);
  };

  return (
    <>
      <div
        className={clsx(
          clsx(
            "bg-(--input-bg)! w-full relative focus-within:border-gray-400 overflow-hidden text-(--primary-text-color)! border border-(--input-border) rounded-full lg:max-w-85! xl:max-w-97!",
            className,
          ),
          { "hidden lg:flex": isResponsive },
        )}
      >
        <span className="w-full h-full min-w-5 min-h-5 max-w-5 max-h-5 absolute top-1/2 -translate-y-1/2 left-3.5 text-(--dashboard-secondary-color) z-20 flex items-center justify-center">
          <IoIosSearch className="w-full h-full min-w-5 min-h-5 max-w-5 max-h-5" />
        </span>
        <input
          type="search"
          className="border-none! w-full py-2 text-base font-semibold disabled:bg-gray-200 focus:border-0 focus:ring-0 focus:outline-0 px-10 search"
          placeholder={placeholder}
          value={search}
          onChange={handleSearch}
        />
        {search && (
          <IoClose
            className="w-full h-full min-w-5 min-h-5 max-w-5 max-h-5 absolute top-1/2 -translate-y-1/2 right-3.5 text-(--dashboard-secondary-color) cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setSearch(dispatch, "")}
          />
        )}
      </div>
    </>
  );
};

export default Searchbar;
