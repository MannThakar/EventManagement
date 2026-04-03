import clsx from "clsx";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose, IoArrowBack } from "react-icons/io5";

const Searchbar = ({ placeholder, isResponsive, className = "" }) => {
  return (
    <>
      {/* Desktop View - Always visible */}
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
          //   value={search}
          //   onChange={handleChange}
        />
        {/* {search && (
          <IoClose
            className="w-full h-full min-w-5 min-h-5 max-w-5 max-h-5 absolute top-1/2 -translate-y-1/2 right-3.5 text-(--dashboard-secondary-color) cursor-pointer hover:opacity-70 transition-opacity"
            onClick={handleClear}
          />
        )} */}
      </div>

      {/* Mobile View - Search Icon Button */}
      {/* {isResponsive && !isSearchExpanded && (
        <button
          onClick={handleSearchClick}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-(--dashboard-secondary-color) transition-colors"
        >
          <IoIosSearch className="w-5 h-5" />
        </button>
      )} */}

      {/* Mobile View - Expanded Search (YouTube Style) */}
    </>
  );
};

export default Searchbar;
