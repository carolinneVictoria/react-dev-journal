import type { Todo } from "../../contexts/types";
import ToDoItem from "../ToDoItem";
import ToDoList from "../ToDoList";
import styles from "./todogroup.module.css"

type ToDoGroupProps = {
    itens: Todo[]
}

const ToDoGroup = ({ itens }: ToDoGroupProps) => {
    if (itens.length === 0) {
        return (
            <p className={styles.emptyState}>
                Nenhuma tarefa por aqui... adicione uma! ✨
            </p>
        );
    }

    return (
        <div className={styles.tarefasContainer}>
            <ToDoList>
                {itens.map(function (t) {
                    return <ToDoItem
                        key={t.id}
                        item={t}
                    />
                })}
            </ToDoList>
        </div>
    )
}

export default ToDoGroup;
