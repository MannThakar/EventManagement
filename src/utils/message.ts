const MIN_PASSWORD_CHAR = 8;

const AUTH_MESSAGE = {
  SIGN_UP_SUCCESS: "User created successfully",
  SIGN_IN_SUCCESS: "User signed in successfully",
};

const FIELD_MESSAGE = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email address",
  MIN_PASSWORD_CHAR: `Password must be at least ${MIN_PASSWORD_CHAR} characters`,
  END_TIME_LESS_THAN_START_TIME: "End date must be greater than start date",
  START_TIME_GREATER_THAN_END_TIME: "Start time must be before end time",
};

const EVENT_MESSAGE = {
  SUCCESS: "Event saved successfully",
  DELETE_SUCCESS: "Event deleted successfully",
};

export { AUTH_MESSAGE, FIELD_MESSAGE, MIN_PASSWORD_CHAR, EVENT_MESSAGE };
