import { TryHandler } from "./types";
import { ErrorA, ErrorB } from "./errors";

export const handler: TryHandler = async (event) => {
  if (event.num > 70) {
    throw new ErrorA("too large");
  }

  if (event.num % 3 === 0) {
    throw new ErrorB("divisible by 3");
  }

  // 半分の確率でタイムアウト
  if (Math.random() < 0.5) {
    await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
};
