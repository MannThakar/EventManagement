import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export const EVENT_TYPE_ALIAS = {
  online: "Online",
  inPerson: "In-Person",
  null: "-",
  undefined: "-",
};

export const EVENT_TYPES = {
  ONLINE: "online",
  IN_PERSON: "inPerson",
};

export const ALL_ROUTES = [
  {
    path: "/",
    name: "Home",
    icon: <IoHomeOutline />,
  },
  {
    path: "/about",
    name: "About",
    icon: <IoMdInformationCircleOutline />,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <MdDashboard />,
    disabled: true,
  },
  {
    path: "/profile",
    name: "Profile",
    icon: <IoPersonOutline />,
    disabled: true,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <IoSettingsOutline />,
    disabled: true,
  },
];

export const REGEX_PATTERN = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

export const EVENT_TYPE_OPTIONS = [
  { label: "Online", value: "online" },
  { label: "In-Person", value: "inPerson" },
];

export const EVENT_CATEGORY = [
  {
    label: "Technology",
    value: "technology",
  },
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Design",
    value: "design",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "Health",
    value: "health",
  },
  {
    label: "Science",
    value: "science",
  },
];

export const FILTER_EVENT_TYPE_OPTIONS = [
  { label: "Event Type", value: "" },
  ...EVENT_TYPE_OPTIONS,
];

export const FILTER_CATEGORY_OPTIONS = [
  { label: "Category", value: "" },
  ...EVENT_CATEGORY,
];

export const SORT_BY_OPTIONS = [
  { label: "Sort By", value: "" },
  { label: "Start Date", value: "startDate" },
  { label: "Title", value: "title" },
];

export const DEFAULT_IMAGES = {
  business: "/events/business.jpg",
  design: "/events/design.jpg",
  entertainment: "/events/entertainment.jpg",
  health: "/events/health.jpg",
  science: "/events/science.jpg",
  technology: "/events/technology.jpg",
};
