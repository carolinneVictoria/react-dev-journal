import { Button } from "../Button"
import { IconCurrency } from "../Icons"
import { TransactionItem } from "../TransactionItem"
import styles from './transactions.module.css'

export const Transactions = () => {
    const items = [
        { "description": "iFood", "value": -20, "date": "2024-10-01T00:00:00-03:00" },
        { "description": "Papelaria Mila", "value": -80, "date": "2024-10-03T00:00:00-03:00" },
        { "description": "Freela (2ª parte)", "value": 1000, "date": "2024-10-03T00:00:00-03:00" },
        { "description": "Magazine Luiza", "value": -300, "date": "2024-10-05T00:00:00-03:00" }
    ]

    return (
        <>
        <ul className={styles.list}>
            {items.map((transactionItem, index) => {
                return (
                    <li key={index}>
                        <TransactionItem item={transactionItem}/>
                    </li>
                )
            })}
        </ul>

        <Button>
            <IconCurrency /> Adicionar transação
        </Button>
        </>
    )
}