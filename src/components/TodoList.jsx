import reactDom from "react-dom";
import {UseState} from reactDom;
import {taskInput} from "./TaskInput";
import {TaskList} from "/TaskList";


export function TodoList(){
    const [todos, setTodos] = UseState(["buy Groceries", "Walk Dog", "Make the Bed", "Wash my Hands", "Eat,"]);
    const {task, setTask] = UseState ("");
    return (
        <></>
    );
}