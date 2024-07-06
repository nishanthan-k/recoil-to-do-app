import { atom } from "recoil";

export const newToDoAtom = atom({
  key: "newToDoAtom",
  default: "",
});

export const toDoList = atom({
  key: "toDoList",
  default: [
    { todo: "one", isCompleted: false },
    { todo: "two", isCompleted: false },
    { todo: "three", isCompleted: true },
  ],
});
