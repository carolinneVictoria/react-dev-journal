import { use } from "react";
import Card from "./components/Card"
import { TitleHeader } from "./components/TitleHeader"
import Dialog from "./components/Dialog";
import ToDoForm from "./components/ToDoForm";
import TodoContext from "./components/TodoProvider/TodoContext";
import ToDoGroup from "./components/ToDoGroup";

function App() {
  const context = use(TodoContext);

  if (!context) {
    throw new Error("TodoContext deve ser usado dentro de um TodoProvider");
  }

  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo, editTodo } = context;

  const handleFormSubmit = (formData: FormData) => {
    if (selectedTodo) {
      editTodo(formData)
    } else {
      addTodo(formData)
    }
    closeFormTodoDialog()
  }

  return (
    <>
      <main>
        <TitleHeader />

        <section className="principal-app">
          <Card>
            <Card.Pomodoro />
          </Card>

          <Card>
            <Card.Add>
              <Dialog isOpen={showDialog} onClose={closeFormTodoDialog}>
                <ToDoForm onSubmit={handleFormSubmit}
                  defaultValue={selectedTodo?.description}
                />
              </Dialog>
              <button
                className="adicionarTarefa"
                type="button"
                onClick={() => openFormTodoDialog()}
              >
                +
              </button>
            </Card.Add>
            <Card.Todo>
              <ToDoGroup
                itens={todos.filter(t => !t.completed)}
              />
            </Card.Todo>
          </Card>
        </section>
      </main>
    </>
  )
}

export default App
