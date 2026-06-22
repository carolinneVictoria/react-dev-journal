import { Aside } from './components/Aside'
import Card from './components/Card'
import { Container } from './components/Container'
import { DailyBudget } from './components/DailyBudget'
import { Main } from './components/Main'
import { SavingStatus } from './components/SavingsStatus'
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

        <div>
          <Typography variant="h1">
            Olá, Carol
          </Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>

        <section>
        {/* primeiro card */}
          <Card>
            <Card.Header>
              Orçamento Diario Disponivel
            </Card.Header>
            <Card.Body>
              <DailyBudget value={250}/>
            </Card.Body>
          </Card>

        {/* segundo card */}
          <Card>
            <Card.Header>
              Progresso da Meta Financeira
            </Card.Header>
            <Card.Body>
              <SavingStatus percent={40}/>
            </Card.Body>
          </Card>

        {/* terceiro card */}
          <Card>
            <Card.Header>
              Orçamento Diario Disponivel
            </Card.Header>
            <Card.Body>
              R$ 200
            </Card.Body>
          </Card>

        {/* quarto card */}
          <Card>
            <Card.Header>
              Orçamento Diario Disponivel
            </Card.Header>
            <Card.Body>
              R$ 200
            </Card.Body>
          </Card>

        </section>

      </Main>

    </Container>
  )
}

export default App
