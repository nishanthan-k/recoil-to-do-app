import { atom } from "recoil";

export const newToDoAtom = atom({
  key: "newToDoAtom",
  default: "",
});

export const toDoList = atom({
  key: "toDoList",
  default: [
    { task: "one", isCompleted: false },
    { task: "two", isCompleted: false },
    { task: "three", isCompleted: true },
  ],
});
