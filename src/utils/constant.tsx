import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

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

export const CARD_DUMMY_DATA = [
  {
    id: 1,
    title: "React Conference 2026",
    description:
      "Learn advanced React patterns, hooks, and performance optimization techniques.",
    eventType: "Online",
    location: "",
    eventLink: "https://reactconf.com",
    startDateTime: "2026-05-10T10:00:00",
    endDateTime: "2026-05-10T16:00:00",
    category: "Technology",
    organizer: "John Doe",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
  },
  {
    id: 2,
    title: "Startup Networking Meetup",
    description:
      "Connect with founders, investors, and entrepreneurs in your city.",
    eventType: "In-Person",
    location: "Ahmedabad, Gujarat",
    eventLink: "",
    startDateTime: "2026-05-15T18:00:00",
    endDateTime: "2026-05-15T21:00:00",
    category: "Business",
    organizer: "Startup India",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
  },
  {
    id: 3,
    title: "UI/UX Design Workshop",
    description:
      "Hands-on workshop covering Figma, user research, and prototyping.",
    eventType: "Online",
    location: "",
    eventLink: "https://designworkshop.com",
    startDateTime: "2026-06-01T11:00:00",
    endDateTime: "2026-06-01T15:00:00",
    category: "Design",
    organizer: "Creative Minds",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
  },
  {
    id: 4,
    title: "Music Fest 2026",
    description: "Enjoy live performances from top artists and bands.",
    eventType: "In-Person",
    location: "Mumbai, India",
    eventLink: "",
    startDateTime: "2026-06-20T17:00:00",
    endDateTime: "2026-06-20T23:00:00",
    category: "Entertainment",
    organizer: "Live Nation",
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    id: 5,
    title: "AI & Machine Learning Bootcamp",
    description:
      "Deep dive into ML algorithms, AI models, and real-world applications.",
    eventType: "Online",
    location: "",
    eventLink: "https://aibootcamp.com",
    startDateTime: "2026-07-05T09:00:00",
    endDateTime: "2026-07-05T17:00:00",
    category: "Technology",
    organizer: "Tech Academy",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0",
  },
];

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
