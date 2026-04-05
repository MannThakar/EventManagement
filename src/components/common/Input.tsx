"use client";
import React, { useState } from "react";
import clsx from "clsx";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller } from "react-hook-form";
import Label from "./Label";
import { iInputProps } from "@/interface/common";

const Input = ({
  name,
  label,
  placeHolder,
  isRequiredField,
  type,
  className,
  showError,
  errorMessage,
  disabled,
  viewPasswordBtn = false,
  autoFocus = false,
  control,
  rules,
  labelClass,
  onFocus,
  onClick,
  onKeyDown,
}: iInputProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const inputType =
    type === "password" && viewPasswordBtn
      ? isToggled
        ? "text"
        : "password"
      : type;

  return (
    <div className="w-full h-fit">
      <Label
        label={label}
        isRequiredField={isRequiredField}
        labelClass={labelClass}
      />

      <div className="flex w-full items-stretch justify-start">
        <div
          className={clsx(
            `w-full relative rounded-lg bg-(--input-bg) text-(--primary-text-color) border transition-all duration-200 focus-within:ring-2 ${
              showError && errorMessage
                ? "focus-within:ring-red-500/50 border-red-400"
                : disabled
                  ? "focus-within:ring-gray-500/50 border-gray-400"
                  : "focus-within:ring-blue-800/50 border-(--input-border)"
            } focus-within:border-transparent`,
            className,
          )}
        >
          <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
              <input
                {...field}
                type={inputType}
                placeholder={placeHolder}
                disabled={disabled}
                autoFocus={autoFocus}
                onFocus={onFocus}
                onClick={onClick}
                onKeyDown={onKeyDown}
                className={clsx(
                  "w-full px-4 py-3 font-semibold bg-transparent border-0 outline-none focus:outline-none rounded-lg",
                  {
                    "cursor-not-allowed": disabled,
                  },
                )}
              />
            )}
          />

          {type === "password" && viewPasswordBtn && (
            <span
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-lg z-10 text-black"
              onClick={() => setIsToggled(!isToggled)}
            >
              {isToggled ? <FaEye /> : <FaEyeSlash />}
            </span>
          )}
        </div>
      </div>

      {showError && errorMessage && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
