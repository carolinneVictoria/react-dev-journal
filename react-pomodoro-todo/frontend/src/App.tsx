import Card from "./components/Card"
import { Footer } from "./components/Footer"
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

      <Footer/>

    </main>
    </>
  )
}

export default App
