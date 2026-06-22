import styles from './transactionitem.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const TransactionItem = ({ item }) => {

    const detailsAddClassName = item.value >= 0 ? styles.income : styles.expense

    return (
        <div className={styles.transaction}>
            <div className={[styles.details, detailsAddClassName].join(' ')}>
                <p>{item.description}</p>
                <p>{formater.format(item.value)}</p>
            </div>

            <div className={styles.date}>
                {new Date(item.date).toLocaleDateString('pt-BR')}
            </div>
        </div>
    )
}