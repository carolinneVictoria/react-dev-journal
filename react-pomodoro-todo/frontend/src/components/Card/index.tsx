import type { ReactNode } from "react";
import styles from "./card.module.css"
import lua from "./../../public/lua.png"
import cafe from "./../../public/xicara-de-cafe.png"
import livro from "./../../public/abra-o-livro.png"
import reiniciar from "./../../public/reiniciar.png"
import play from "./../../public/botao-play.png"

import { Tomato } from "../Tomato"

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <section className={styles.principalcard}>
            {children}
        </section>
    )
}

export const CardPomodoro = () => {
    return (
        <>
            <div className={styles.buttonGroup}>
                <div className={styles.btnoption}>
                    <img src={livro} alt="Pomodoro" />
                    <button>Pomodoro</button>
                </div>
                <div className={styles.btnoption}>
                    <img src={cafe} alt="descanso curto" />
                    <button>Descanso Curto</button>
                </div>
                <div className={styles.btnoption}>
                    <img src={lua} alt="descanso longo" />
                    <button>Descanso Longo</button>
                </div>
            </div>

            <div className={styles.tomatoContainer}>
                <Tomato time="25:00" />
            </div>

            <div className="btnIniciar">
                <div className={styles.buttonGroup}>
                    <div className={styles.btniniciar}>
                        <img src={play} alt="Iniciar" />
                        <button>Iniciar</button>
                    </div>
                    <div className={styles.btnreiniciar}>
                        <img src={reiniciar} alt="Iniciar" />
                        <button></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export const CardTodo = () => {
    return (
        <>
            <div className={styles.text}>
                <h2>📝 Minhas Tarefas</h2>
                <button className={styles.adicionarTarefa}>+</button>
            </div>

            <div className={styles.todoActions}>
                <button>A fazer (3)</button>
                <button>Concluidas (2)</button>
            </div>

            <div className={styles.tarefaContainer}>
                <div className={styles.tarefas}>
                    <input type="checkbox" id="js" />
                    <label>Estudar JavaScript por 50 Minutos</label>
                </div>
                <div className={styles.tarefas}>
                    <input type="checkbox" id="jsx" />
                    <label>Estudar React por 25 Minutos</label>
                </div>
                <div className={styles.tarefas}>
                    <input type="checkbox" id="jsx" />
                    <label>Ler um livro</label>
                </div>
            </div>

            <hr className={styles.divisor} />

            <div className={styles.progressoContainer}>
                <h4>2 de 5 concluídas!</h4>

                <div className={styles.progressoInfo}>
                    <div className={styles.barra}>
                        <div className={styles.preenchimento}></div>
                    </div>

                    <span>60%</span>
                </div>
            </div>
        </>
    )
}

Card.Pomodoro = CardPomodoro
Card.Todo = CardTodo

export default Card;