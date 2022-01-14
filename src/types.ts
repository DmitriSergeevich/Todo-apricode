export type TodoType = {
  id: number;
  title: string;
  complited: boolean;
};

export enum TodoFilters {
  all = "all",
  complited = "complited",
  uncomplited = "uncomplited",
}

export type ButtonType = {
  lable: any;
  handler: () => void;
  classes: string;
};

export type BtnsGroupProps = {
  btns: ButtonType[];
};

export type InputTextItemProps = {
  handler: (s: string) => void;
};
