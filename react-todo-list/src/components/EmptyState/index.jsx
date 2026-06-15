import "./empty-state.style.css"

export function EmptyState(){
    return(
        <section className="empty-state">
            <p>Ainda não tem tarefas cadastradas...
                Adicione uma para começar!
            </p>
        </section>
    )
}