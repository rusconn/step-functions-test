export type User = {
  id: number;
  name: string;
};

export type EntryOutput = User[];

export type MapTaskInput = EntryOutput[0];

export type MapTaskOutput = {
  succeeded: boolean;
};

export type NotifyInput = MapTaskOutput[];
