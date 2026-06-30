import { useEffect, useState, type ReactNode } from "react";
import TodoContext from "./TodoContext";

const TODOS = 'todos';

type TodoProps = {
    children: ReactNode;
}

type Todo = {
    id: number;
    description: string;
    completed: boolean;
    createdAt: string;
};

const TodoProvider = ({ children }: TodoProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem(TODOS);

        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    const [showDialog, setShowDialog] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos));
    }, [todos]);

    const openFormTodoDialog = (todo?: Todo) => {
        if (todo) {
            setSelectedTodo(todo);
        }
        setShowDialog(true);
    }

    const closeFormTodoDialog = () => {
        setShowDialog(false);
        setSelectedTodo(null);
    }

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos]);

    const addTodo = (formData: FormData) => {
        const description = formData.get("description")?.toString() ?? "";
        setTodos(prevState => {
            const todo: Todo = {
                id: prevState.length + 1,
                description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, todo]
        })
    };

    return (
        <TodoContext value={{
            todos,
            addTodo,
            // toggleTodoCompleted,
            // deleteTodo,
            showDialog,
            openFormTodoDialog,
            closeFormTodoDialog,
            selectedTodo,
            // editTodo
        }}
        >
            {children}
        </TodoContext>
    )
}

export default TodoProvider;