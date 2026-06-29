import type { ReactNode } from "react";

type AddTaskPros = {
    children: ReactNode;
};

const AddTask = ({ children }: AddTaskPros) => {
    return (
        <section className="section">
            {children}
        </section>
    )
}

export default AddTask;