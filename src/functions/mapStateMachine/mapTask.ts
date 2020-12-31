import { Handler } from "../types";
import { MapTaskInput, MapTaskOutput } from "./types";

export const handler: Handler<MapTaskInput, MapTaskOutput> = async (
  user,
  context
) => {
  console.log(JSON.stringify({ user }, null, 2));
  console.log(JSON.stringify({ context }, null, 2));

  return { succeeded: user.id % 2 === 0 };
};
