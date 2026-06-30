export type Todo = {
    id: string;
    description: string;
    completed: boolean;
    createdAt: string;
};

export type TodoContextType = {
    todos: Todo[];
    addTodo: (formData: FormData) => void;
    editTodo: (formData: FormData) => void;
    deleteTodo: () => void;
    toggleTodoCompleted: (id: string) => void;
    showDialog: boolean;
    openFormTodoDialog: (todo?: Todo) => void;
    closeFormTodoDialog: () => void;
    selectedTodo: Todo | null;
};