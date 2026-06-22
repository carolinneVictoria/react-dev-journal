import { IconBank } from '../Icons'
import styles from './accountitem.module.css'

const formater = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" })

export const AccountItem = ({ item }) => {
    return (
        <div className={styles.account}>
            <div className={styles.details}>
                <IconBank/> <p>{item.bank}</p>
            </div>

            <div className={styles.value}>
                <p>Saldo</p>
                <p>{formater.format(item.balance)}</p>
            </div>

        </div>
    )
}