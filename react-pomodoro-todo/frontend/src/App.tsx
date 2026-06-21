import Card from "./components/Card"
import { TitleHeader } from "./components/TitleHeader"

function App() {

  return (
    <>
    <main>
      <TitleHeader />

      <section className="principal-app">
        <Card>
          <Card.Pomodoro/>
        </Card>

        <Card>
          <Card.Todo/>
        </Card>
      </section>

    </main>
    </>
  )
}

export default App
