import { turnOff, turnOn } from "./client";

const CommandMap: Record<string, () => void> = {
  HEATING_ON: turnOn,
  HEATING_OFF: turnOff,
};

export async function execute(command: string) {
  return CommandMap[command]();
}
