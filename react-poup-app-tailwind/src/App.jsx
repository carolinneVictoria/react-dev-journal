import { Account } from "./components/Account"
import { Aside } from "./components/Aside"
import Card from "./components/Card"
import { Container } from "./components/Container"
import { DailyBudget } from "./components/DailyBudget"
import { Main } from "./components/Main"
import { SavingsStatus } from "./components/SavingsStatus"
import { SearchInput } from "./components/SearchInput"
import { Transactions } from "./components/Transactions"
import { Typography } from "./components/Typography"


function App() {

  return (
    <>
      <div className='bg-neutral-background min-h-screen'>
        <Container>
          <Aside />
          <Main>
            <SearchInput name="q" />

            <div>
              <Typography variant="h1">Olá, Carol!</Typography>
              <Typography variant="body">Veja como estão suas finanças hoje</Typography>
            </div>

            <section className="grid grid-cols-2 itens-stretch gap-6">
              {/* Primeiro Card */}
              <Card>
                <Card.Header>
                  Orçamento diário disponivel:
                </Card.Header>
                <Card.Body>
                  <DailyBudget value={230}/>
                </Card.Body>
              </Card>

              {/* Segundo Card */}
              <Card>
                <Card.Header>
                  Progresso da Meta Financeira
                </Card.Header>
                <Card.Body>
                  <SavingsStatus />
                </Card.Body>
              </Card>

              {/* Terceiro Card */}
              <Card>
                <Card.Header>
                  Movimentação Financeira
                </Card.Header>
                <Card.Body>
                  <Transactions />
                </Card.Body>
              </Card>

              {/* Quarto Card */}
              <Card>
                <Card.Header>
                  Minhas Contas
                </Card.Header>
                <Card.Body>
                  <Account />
                </Card.Body>
              </Card>
            </section>

          </Main>
        </Container>
      </div>
    </>
  )
}

export default App
