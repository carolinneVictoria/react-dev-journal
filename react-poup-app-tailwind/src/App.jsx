import { Aside } from "./components/Aside"
import { Container } from "./components/Container"


function App() {

  return (
    <>
      <div className='bg-neutral-background min-h-screen'>
        <Container>
          <Aside />
        </Container>
      </div>
    </>
  )
}

export default App
