"use client";

import clsx from "clsx";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Label from "./Label";
import dayjs from "dayjs";
import { getNextTimeSlot } from "@/utils/helper";

interface Props {
  startDate: string | null;
  endDate: string | null;
  onStartChange: (date: Date | null) => void;
  onEndChange: (date: Date | null) => void;
  startError?: string;
  endError?: string;
  disabled?: boolean;
}

const DateTimeRangePicker: React.FC<Props> = ({
  startDate,
  endDate,
  onStartChange,
  onEndChange,
  startError,
  endError,
  disabled,
}) => {
  return (
    <>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-full">
          <Label label="Start Date and Time" isRequiredField />

          <DatePicker
            placeholderText="Select event start date & time"
            selected={startDate ? dayjs(startDate).toDate() : null}
            onChange={onStartChange}
            showTimeSelect
            timeIntervals={30}
            minDate={new Date()}
            minTime={dayjs().startOf("day").toDate()}
            maxTime={dayjs().endOf("day").toDate()}
            filterTime={(time) => {
              const now = dayjs();
              const selectedDay = dayjs(time);

              if (selectedDay.isSame(now, "day")) {
                const nextSlot = dayjs(getNextTimeSlot())
                  .second(0)
                  .millisecond(0);
                const current = dayjs(time).second(0).millisecond(0);

                return current.isSame(nextSlot) || current.isAfter(nextSlot);
              }

              return true;
            }}
            dateFormat="dd/MM/yyyy hh:mm aa"
            disabled={disabled}
            className={clsx(
              "h-12.5 w-full rounded-lg border px-3 text-sm bg-(--input-bg) text-black font-bold text-[15px]",
              startError ? "border-red-500" : "border-gray-300",
              disabled ? "cursor-not-allowed" : "cursor-pointer",
            )}
          />
          {startError && (
            <p className="text-red-500 text-sm mt-1">{startError}</p>
          )}
        </div>

        <div className="flex flex-col w-full">
          <Label label="End Date and Time" isRequiredField />
          <DatePicker
            placeholderText="Select event end date & time"
            selected={endDate ? dayjs(endDate).toDate() : null}
            onChange={onEndChange}
            showTimeSelect
            timeIntervals={30}
            minDate={startDate ? dayjs(startDate).toDate() : new Date()}
            minTime={
              startDate
                ? dayjs(startDate).add(30, "minute").toDate()
                : dayjs().startOf("day").toDate()
            }
            maxTime={dayjs().endOf("day").toDate()} // required
            filterTime={(time) => {
              if (!startDate) return true;

              const start = dayjs(startDate);
              const current = dayjs(time);

              // SAME DAY → restrict time
              if (current.isSame(start, "day")) {
                return current.isAfter(start);
              }

              return true;
            }}
            disabled={disabled}
            dateFormat="dd/MM/yyyy hh:mm aa"
            className={clsx(
              "h-12.5 w-full rounded-lg border px-3 text-sm bg-(--input-bg) text-black font-bold text-[15px]",
              endError ? "border-red-500" : "border-gray-300",
              disabled ? "cursor-not-allowed" : "cursor-pointer",
            )}
          />
          {endError && (
            <p className="text-red-500 text-sm mt-1" role="alert">
              {endError}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default DateTimeRangePicker;
