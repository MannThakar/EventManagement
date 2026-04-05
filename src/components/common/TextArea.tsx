"use client";
import React from "react";
import clsx from "clsx";
import { Controller } from "react-hook-form";
import Label from "./Label";
import { iInputProps } from "@/interface/common";

const TextArea = ({
  name,
  label,
  placeHolder,
  isRequiredField,
  className,
  showError,
  errorMessage,
  disabled,
  autoFocus = false,
  control,
  rules,
  labelClass,
}: iInputProps) => {
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
              <textarea
                {...field}
                placeholder={placeHolder}
                disabled={disabled}
                autoFocus={autoFocus}
                className={clsx(
                  "w-full px-4 py-3 font-semibold bg-transparent border-0 outline-none focus:outline-none rounded-lg",
                  {
                    "cursor-not-allowed": disabled,
                  },
                )}
                rows={5}
                style={{ resize: "none" }}
              />
            )}
          />
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

export default TextArea;
