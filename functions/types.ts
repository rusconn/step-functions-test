export { Handler } from "aws-lambda";

export type User = {
  id: number;
  name: string;
};

export type EntryOutput = {
  users: User[];
};

export type MapTaskInput = EntryOutput["users"][0];

export type MapTaskOutput = {
  succeeded: boolean;
};

export type NotifyInput = MapTaskOutput[];
