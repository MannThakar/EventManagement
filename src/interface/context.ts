import { iEvent } from "./event";

interface iState {
  isCollapse: boolean | undefined;
  isModalOpen: boolean;
  selectedEvent: iEvent | null;
  isReadOnly: boolean;
  events: iEvent[];
  search: string;
  filters: {
    eventType?: string;
    category?: string;
    startDate?: string;
    endDate?: string;
    sortBy?: string;
  };
}

type iAction =
  | { type: "SET_IS_COLLAPSE"; value: boolean }
  | { type: "ANOTHER_ACTION"; payload: string }
  | { type: "SET_IS_MODAL_OPEN"; value: boolean }
  | { type: "SET_SELECTED_EVENT"; value: iEvent | null }
  | { type: "SET_IS_READ_ONLY"; value: boolean }
  | { type: "SET_EVENTS"; value: iEvent[] }
  | { type: "SET_SEARCH"; value: string }
  | { type: "SET_FILTERS"; value: Partial<iState["filters"]> };

export type { iState, iAction };
