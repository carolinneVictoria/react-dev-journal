import { Heading } from "../Heading";
import { ToDoList } from "../ToDoList"
import { ToDoItem } from "../ToDoItem"
import { SubHeading } from "../SubHeading"

export function ToDoGroup({ itens, heading }) {
    return (
        <>
        <SubHeading>{heading}</SubHeading>
        <ToDoList>
            {itens.map(function (t) {
                return <ToDoItem
                    key={t.id}
                    item={t}
                />
            })}
        </ToDoList>
        </>
    )
}

export default ToDoGroup;