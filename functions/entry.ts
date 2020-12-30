import { EntryOutput, Handler } from "./types";

export const handler: Handler<unknown, EntryOutput> = async (
  event,
  context
) => {
  console.log(JSON.stringify({ event }, null, 2));
  console.log(JSON.stringify({ context }, null, 2));

  return {
    users: [
      { id: 1, name: "rusconn" },
      { id: 2, name: "hoge" },
      { id: 3, name: "piyo" },
    ],
  };
};
