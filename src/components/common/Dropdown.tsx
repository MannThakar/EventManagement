import React from "react";
import clsx from "clsx";
import Label from "./Label";
import { IoChevronDown } from "react-icons/io5";

interface Option {
  label: string;
  value: string | number;
}

interface DropdownProps {
  options: Option[];
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  error?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className,
  name,
  error,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <Label label={placeholder} isRequiredField />
        <div className="relative">
          <select
            name={name}
            value={value}
            disabled={disabled}
            onChange={(e) => onChange?.(e.target.value)}
            className={clsx(
              "h-12.5 w-full rounded-lg border border-gray-300 bg-(--input-bg)",
              "px-3 pr-10 text-[15px] text-(--primary-text-color) font-semibold outline-none",
              "appearance-none",
              "focus:ring-2 focus:ring-blue-500",
              "disabled:cursor-not-allowed",
              {
                "focus-within:ring-red-500/50 border-red-400  ": error,
              },
              className,
            )}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {options?.map((option, index) => (
              <option
                key={index}
                value={option.value}
                className="text-gray-700 bg-white"
              >
                {option.label}
              </option>
            ))}
          </select>

          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
            <IoChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
