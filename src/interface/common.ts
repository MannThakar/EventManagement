import React from "react";
import { iEvent } from "./event";

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
  control?: unknown;
  rules?: unknown;

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

interface iCardProps {
  item?: iEvent;
  onEditClick?: (event: iEvent) => void;
  onReadClick?: (event: iEvent) => void;
  onDeleteClick?: (event: string) => void;
}

interface iSideBarRoute {
  path: string;
  name: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

interface iSideBarProps {
  isCollapse?: boolean;
  data?: iSideBarRoute;
}

interface iModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  formClassName?: string;
  onSubmit?: () => void;
  children: React.ReactNode;
}

interface iSearchbarProps {
  placeholder: string;
  isResponsive?: boolean;
  className?: string;
}

interface iNoDataFound {
  text?: string;
  className?: string;
  textClassName?: string;
}

interface iOption {
  label: string;
  value: string | number;
}

interface iDropdownProps {
  options: iOption[];
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  name?: string;
  error?: string;
  parentClassName?: string;
}

export type {
  iInputProps,
  iCardProps,
  iSideBarProps,
  iSideBarRoute,
  iModalProps,
  iSearchbarProps,
  iNoDataFound,
  iOption,
  iDropdownProps,
};
