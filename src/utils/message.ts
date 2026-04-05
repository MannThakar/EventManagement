const MIN_PASSWORD_CHAR = 8;

const AUTH_MESSAGE = {
  SIGN_UP_SUCCESS: "User created successfully",
  SIGN_IN_SUCCESS: "User signed in successfully",
};

const FIELD_MESSAGE = {
  REQUIRED: "This field is required",
  INVALID_EMAIL: "Invalid email address",
  MIN_PASSWORD_CHAR: `Password must be at least ${MIN_PASSWORD_CHAR} characters`,
};

const EVENT_MESSAGE = {
  CREATE_SUCCESS: "Event created successfully",
  UPDATE_SUCCESS: "Event updated successfully",
  DELETE_SUCCESS: "Event deleted successfully",
};

export { AUTH_MESSAGE, FIELD_MESSAGE, MIN_PASSWORD_CHAR, EVENT_MESSAGE };
