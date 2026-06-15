import TodoContext from "./TodoContext";
import { useEffect, useState } from "react"

const TODOS = 'todos';

export function TodoProvider({ children }) {

    const savedTodos = localStorage.getItem(TODOS)

    const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])
    const [showDialog, setShowDialog] = useState(false);
    const [selectedTodo, setSelectedTodo]= useState();

    // Função para alternar a visibilidade do diálogo
    const openFormTodoDialog = (todo) => {
        if (todo) {
            setSelectedTodo(todo);
        }
        setShowDialog(true);
    };

    const closeFormTodoDialog = () => {
        setShowDialog(false);
        setSelectedTodo(null);
    };

    useEffect(() => {
        localStorage.setItem(TODOS, JSON.stringify(todos))
    }, [todos])

    // Função para adicionar nova task
    const addTodo = (formData) => {
        const description = formData.get('description')
        setTodos(prevState => {
            const todo = {
                id: prevState.length + 1,
                description,
                completed: false,
                createdAt: new Date().toISOString()
            }
            return [...prevState, todo]
        })
    }

    // Função para marcar uma task como concluida
    const toggleTodoCompleted = (todo) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id == todo.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
    }
    // Função para editar uma task
    const editTodo = (formData) => {
        setTodos(prevState => {
            return prevState.map(t => {
                if (t.id == selectedTodo.id) {
                    return {
                        ...t,
                        description: formData.get('description')
                    }
                }
                return t
            })
        })
    }

    // Função para remover uma task
    const deleteTodo = (todo) => {
        setTodos(prevState => {
            return prevState.filter(t => t.id != todo.id)
        })
    }

    return (
        <TodoContext value={{
            todos,
            addTodo,
            toggleTodoCompleted,
            deleteTodo,
            showDialog,
            openFormTodoDialog,
            closeFormTodoDialog,
            selectedTodo,
            editTodo
        }}
        >
            {children}
        </TodoContext>
    )
}

export default TodoProvider