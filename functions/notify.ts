import { Handler, NotifyInput } from "./types";

export const handler: Handler<NotifyInput> = async (event, context) => {
  console.log(JSON.stringify({ event }, null, 2));
  console.log(JSON.stringify({ context }, null, 2));

  const whole = event.length;
  const successes = event.filter((x) => x.succeeded).length;
  const failures = event.filter((x) => !x.succeeded).length;

  console.log({ whole, successes, failures });
};
