import { IconSavings } from '../Icons'
import { ProgressBar } from '../ProgressBar'
import styles from './savingstatus.module.css'

export const SavingStatus = ({ percent }) => {

    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
            <ProgressBar percent={percent} />
        </div>
    )
}