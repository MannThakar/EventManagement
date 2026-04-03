interface iState {
  isCollapse: boolean | undefined;
}

type iAction =
  | { type: "SET_IS_COLLAPSE"; value: boolean }
  | { type: "ANOTHER_ACTION"; payload: string };

export type { iState, iAction };
