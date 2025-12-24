import { CorsOptions } from "cors";
import { LogEmoji, logger } from "../utils/logger";

export const corsConfig: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true);
    }
    if (origin === process.env.FRONTEND_URL) {
      logger.info({
        event: "USER_LOGGED_IN_ACCEPTED",
        origin,
        emoji: LogEmoji.SUCCESS,
      });
      return callback(null, true);
    } else {
      logger.warn({
        event: "USER_LOGGED_IN_FAILED",
        origin,
        emoji: LogEmoji.WARNING,
      });
      return callback(new Error("Not allowed by CORS"));
    }
  },
};
