export type Todo = {
    id: number;
    description: string;
    completed: boolean;
    createdAt: string;
};

export type TodoContextType = {
    todos: Todo[];
    addTodo: (formData: FormData) => void;
    editTodo: (formData: FormData) => void;
    showDialog: boolean;
    openFormTodoDialog: (todo?: Todo) => void;
    closeFormTodoDialog: () => void;
    selectedTodo: Todo | null;
};