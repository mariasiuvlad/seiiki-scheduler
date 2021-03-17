import Axios, { AxiosRequestConfig } from "axios";

const Hostname = process.env.HEATING_AGENT_ADDR || "192.168.0.105";
const Actions = {
  On: process.env.HEATING_AGENT_ON || "/on",
  Off: process.env.HEATING_AGENT_OFF || "/off",
};

const config: AxiosRequestConfig = {
  baseURL: `http://${Hostname}`,
  method: "GET",
  headers: { Accept: "application/json" },
};

const client = (url: string) => {
  try {
    return Axios({ url, ...config });
  } catch (err) {
    console.log(err);
  }
};

export function turnOn() {
  return client(Actions.On);
}

export function turnOff() {
  return client(Actions.Off);
}
