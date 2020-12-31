import { Handler } from "../types";
import { EchoInput } from "./types";

export const handler: Handler<EchoInput> = async (event, context) => {
  console.log(JSON.stringify({ event }, null, 2));
  console.log(JSON.stringify({ context }, null, 2));
};
