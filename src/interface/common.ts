import React from "react";

interface iInputProps {
  name: string;

  // UI
  label?: string;
  labelClass?: string;
  placeHolder?: string;
  className?: string;

  // Input behavior
  type: "text" | "email" | "password" | "number" | "date" | "time";
  value?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  autoComplete?: "on" | "off";
  maxLength?: number;

  // Validation
  isRequiredField?: boolean;
  showError?: boolean;
  errorMessage?: string | string[] | undefined;

  // Events
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;

  // Special Features
  viewPasswordBtn?: boolean;
}

export type { iInputProps };
