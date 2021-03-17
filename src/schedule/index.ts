import schedule from "node-schedule";

export interface Schedule {
  uuid: string;
  timestamp?: Date;
  command: string;
  cron?: string;
}

export default {
  scheduleJob: schedule.scheduleJob,
  jobs: schedule.scheduledJobs,
  jobExists: (uuid: string) => !!schedule.scheduledJobs[uuid],
};
