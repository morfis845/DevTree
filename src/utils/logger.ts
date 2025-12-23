type LogEvent =
  | "EMAIL_ALREADY_EXISTS"
  | "USER_ALREADY_EXISTS"
  | "USER_REGISTERED"
  | "USER_REGISTER_FAILED";

type LogPayload = {
  event: LogEvent;
  [key: string]: unknown;
};

export const LogEmoji = {
  SUCCESS: "🎉",
  WARNING: "⚠️",
  ERROR: "❌",
  INFO: "ℹ️",
};

export const logger = {
  warn: (payload: LogPayload) => console.warn(payload),
  info: (payload: LogPayload) => console.info(payload),
  error: (payload: LogPayload) => console.error(payload),
};
