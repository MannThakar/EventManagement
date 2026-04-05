"use client";

import React from "react";
import { LuFilter } from "react-icons/lu";
import { RiResetLeftFill } from "react-icons/ri";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import Button from "./common/Button";
import DateRangePicker from "./common/DateRangePicker";
import { setIsModalValue, useAppContext } from "@/context";
import {
  FILTER_CATEGORY_OPTIONS,
  FILTER_EVENT_TYPE_OPTIONS,
  SORT_BY_OPTIONS,
} from "@/utils/constant";

interface Props {
  onChange: (key: string, value: string) => void;
  onReset: () => void;
}

const Divider = () => (
  <div className="h-14 w-px bg-gray-300 mx-2 hidden md:block" />
);

const Select = ({
  value,
  onChange,
  children,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) => (
  <select
    value={value}
    onChange={onChange}
    className="outline-none bg-transparent text-(--primary-text-color) font-medium cursor-pointer"
  >
    {children}
  </select>
);

const FilterHeader: React.FC<Props> = ({ onChange, onReset }) => {
  const { state, dispatch } = useAppContext();
  const {
    filters: { eventType, category, startDate, endDate, sortBy },
  } = state;

  return (
    <header>
      <div className="bg-white rounded-lg flex flex-wrap items-center border border-gray-300 w-[65%] mb-10 py-0 px-3 gap-2">
        <div className="flex items-center justify-center px-3">
          <LuFilter className="w-5 h-5 text-gray-500" />
        </div>

        <Divider />

        <div className="px-2">
          <Select
            value={eventType || ""}
            onChange={(e) => onChange("eventType", e.target.value)}
          >
            {FILTER_EVENT_TYPE_OPTIONS?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>

        <Divider />

        <div className="px-2">
          <Select
            value={category || ""}
            onChange={(e) => onChange("category", e.target.value)}
          >
            {FILTER_CATEGORY_OPTIONS?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>

        <Divider />

        <div className="outline-none bg-transparent text-(--primary-text-color) font-medium cursor-pointer flex items-center justify-center">
          <DateRangePicker
            startDate={startDate ? new Date(startDate) : null}
            endDate={endDate ? new Date(endDate) : null}
            onChange={(dates) => {
              const [start, end] = dates;
              onChange("startDate", start ? start.toISOString() : "");
              onChange("endDate", end ? end.toISOString() : "");
            }}
          />
        </div>

        <Divider />

        <div className="px-2">
          <Select
            value={sortBy || ""}
            onChange={(e) => onChange("sortBy", e.target.value)}
          >
            {SORT_BY_OPTIONS?.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>

        <Divider />

        <Button
          className="flex items-center gap-2 px-3 text-green-600 font-medium"
          onClick={() => setIsModalValue(dispatch, true)}
        >
          <MdOutlineCreateNewFolder className="w-5 h-5" />
          Create Event
        </Button>

        <Divider />

        <Button
          onClick={onReset}
          className="flex items-center gap-2 px-3 text-red-600 "
        >
          <RiResetLeftFill className="w-5 h-5" />
          Reset
        </Button>
      </div>
    </header>
  );
};

export default FilterHeader;
