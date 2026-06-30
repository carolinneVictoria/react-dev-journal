import { useState } from "react";
import Card from "./components/Card"
import { TitleHeader } from "./components/TitleHeader"
import Dialog from "./components/Dialog";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  const handleFormSubmit: React.ComponentProps<"form">["onSubmit"] = (
    event
  ) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const description = formData.get("description");

    console.log(description);

    form.reset();
    closeDialog();
  };
  
  return (
    <>
      <main>
        <TitleHeader />

        <section className="principal-app">
          <Card>
            <Card.Pomodoro />
          </Card>

          <Card>
            <Card.Todo onOpenDialog={openDialog}>
              <Dialog
                isOpen={showDialog}
                onClose={closeDialog}
              >
                <ToDoForm
                  defaultValue=""
                  onSubmit={handleFormSubmit}
                />
              </Dialog>
            </Card.Todo>
          </Card>

        </section>
      </main>
    </>
  )
}

export default App
