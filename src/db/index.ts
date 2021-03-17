import { Pool } from "pg";
const pool = new Pool();

export const query = (text: string, params: any[]) => pool.query(text, params);
export const GET_EVENTS = "SELECT * FROM schedule WHERE timestamp >= $1";
export const getEvents = () => query(GET_EVENTS, [new Date(Date.now())]);
