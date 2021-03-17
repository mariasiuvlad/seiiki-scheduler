import { DateTime } from "luxon";

const logger = (...args: string[]) => {
  const now = DateTime.now().toLocaleString(DateTime.TIME_WITH_SECONDS);
  console.log(`[${now}]`, ...args);
};

export default logger;
