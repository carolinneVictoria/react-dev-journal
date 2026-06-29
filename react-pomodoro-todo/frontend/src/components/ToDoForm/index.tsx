import styles from "./to-do-form.module.css";
import type { FormEventHandler } from "react";


type ToDoFormProps = {
    onSubmit: FormEventHandler<HTMLFormElement>;
    defaultValue?: string;
};

export function ToDoForm({
    onSubmit,
    defaultValue,
}: ToDoFormProps) {

    return (
        <form className={styles.todo} onSubmit={onSubmit}>
            <input
                type="text"
                name="description"
                placeholder="Digite o item que deseja adicionar"
                defaultValue={defaultValue}
                required
            />

            <button type="submit">
                Salvar Item
            </button>
        </form>
    );
}

export default ToDoForm;