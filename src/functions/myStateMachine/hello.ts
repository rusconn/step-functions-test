import { Handler } from "../types";
import { HelloOutput } from "./types";

export const handler: Handler<unknown, HelloOutput> = async (
  event,
  context
) => {
  console.log(JSON.stringify({ event }, null, 2));
  console.log(JSON.stringify({ context }, null, 2));

  return { value: Math.random() };
};
