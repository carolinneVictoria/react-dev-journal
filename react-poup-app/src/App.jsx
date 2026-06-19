import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'


function App() {

  return (
    <Container>
      {/* Sidebar */}
      <Aside />

      {/* Conteudo principal */}
      <Main>
        <SearchInput /> {/* Barra de busca */}

        <Typography variant="h1">
          Olá, Carol
        </Typography>
        <Typography variant="body">
          Veja como estão suas finanças hoje.
        </Typography>

      </Main>

    </Container>
  )
}

export default App
