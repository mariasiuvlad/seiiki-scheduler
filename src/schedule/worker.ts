import schedule, { Schedule } from ".";
import { execute } from "../heating";
import logger from "../logger";
import { getEvents } from "../db";

const QUERY_INTERVAL = 1000 * 60; // 10 minutes

const handleJob = (row: Schedule) => {
  if (schedule.jobExists(row.uuid)) {
    return logger(`Job with id ${row.uuid} already scheduled`);
  }
  const job = schedule.scheduleJob(row.uuid, row.timestamp, () =>
    execute(row.command)
  );
  if (job) {
    logger(`Scheduling job with id ${job.name}`);
  }
};

const update = async () => {
  const { rows } = await getEvents();
  logger(`Got ${rows.length} jobs`);
  rows.forEach(handleJob);
};

export default function () {
  update();
  setInterval(update, QUERY_INTERVAL);
}
