import styles from './aside.module.css'
import logo from '../../assets/logo.svg'

export const Aside = () => {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="PoupApp" />
            <footer className={styles.footer}>
                Desenvolvido por Alura e Carolinne. Projeto ficticio sem fins comerciais.
            </footer>
        </aside>
    )
}