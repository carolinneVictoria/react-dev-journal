import { useEffect, useRef, type ReactNode } from "react";
import styles from "./card.module.css"
import lua from "./../../public/lua.png"
import cafe from "./../../public/xicara-de-cafe.png"
import livro from "./../../public/abra-o-livro.png"
import reiniciar from "./../../public/reiniciar.png"
import play from "./../../public/botao-play.png"
import pause from "./../../public/pause.png"
import pauseSound from "../../sounds/pause.mp3";

import { Tomato } from "../Tomato"
import { useTimer, type PomodoroMode } from "../Timer/Timer";

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

// liga cada modo do timer ao ícone/legenda correspondente na UI
const MODE_OPTIONS: { key: PomodoroMode; icon: string; alt: string }[] = [
    { key: "pomodoro", icon: livro, alt: "Pomodoro" },
    { key: "short", icon: cafe, alt: "Descanso Curto" },
    { key: "long", icon: lua, alt: "Descanso Longo" },
];

export const CardPomodoro = () => {
    const pauseAudio = useRef(new Audio(pauseSound));
    
    useEffect(() => {
        pauseAudio.current.volume = 0.3;
    }, []);

    const timer = useTimer({
        onFinish: () => {
            pauseAudio.current.currentTime = 0;
            pauseAudio.current.play();
            console.log(`Tempo do modo "${timer.modes[timer.mode].label}" acabou!`);
        },
    });

    return (
        <>
            <div className={styles.buttonGroup}>
                {MODE_OPTIONS.map(({ key, icon, alt }) => (
                    <div
                        key={key}
                        className={`${styles.btnoption} ${timer.mode === key ? styles.ativo ?? "" : ""}`}
                    >
                        <img src={icon} alt={alt} />
                        <button onClick={() => timer.changeMode(key)}>
                            {timer.modes[key].label}
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.tomatoContainer}>
                <Tomato time={timer.formattedTime} />
            </div>

            <div className="btnIniciar">
                <div className={styles.buttonGroup}>
                    <div className={styles.btniniciar}>
                        <img
                            src={timer.isRunning ? pause : play}
                            alt={timer.isRunning ? "Pausar" : "Iniciar"}
                        />
                        <button onClick={timer.toggle}>
                            {timer.isRunning ? "Pausar" : "Iniciar"}
                        </button>
                    </div>
                    <div className={styles.btnreiniciar}>
                        <button onClick={timer.reset}>
                            <img src={reiniciar} alt="Reiniciar" />
                        </button>
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