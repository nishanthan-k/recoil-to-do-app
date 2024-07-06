import { atom } from "recoil";

export const newToDoAtom = atom({
  key: "newToDoAtom",
  default: "",
});

export const toDoList = atom({
  key: "toDoList",
  default: [
    { task: "qwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiopqwertyuiop", isCompleted: false, id: 1 },
    { task: "one", isCompleted: false, id: 2 },
    { task: "two", isCompleted: false, id: 3 },
    { task: "three", isCompleted: true, id: 4 },
  ],
});
