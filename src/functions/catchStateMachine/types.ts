import { Handler } from "../types";

export type TryEvent = {
  num: number;
};

export type TryHandler = Handler<TryEvent, void>;
export type ErrorAHandler = Handler<void, void>;
export type ErrorBHandler = Handler<void, void>;
export type ErrorHandler = Handler<void, void>;
