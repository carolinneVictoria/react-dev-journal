import { useContext } from "react";
import TodoContext from "../components/TodoProvider/TodoContext";

export const useTodo = () => {
    return useContext(TodoContext);
};