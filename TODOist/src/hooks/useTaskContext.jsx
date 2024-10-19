import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function useTaskContext() {
  const thisContext = useContext(TaskContext);
  if (!thisContext)
    throw new Error("TaskContext should be used under the provider.");
  return thisContext;
}
