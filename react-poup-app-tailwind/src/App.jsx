import { Aside } from "./components/Aside"
import { Container } from "./components/Container"
import { Main } from "./components/Main"
import { SearchInput } from "./components/SearchInput"


function App() {

  return (
    <>
      <div className='bg-neutral-background min-h-screen'>
        <Container>
          <Aside />
          <Main>
            <SearchInput name="q" />
          </Main>
        </Container>
      </div>
    </>
  )
}

export default App
