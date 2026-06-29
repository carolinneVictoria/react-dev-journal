import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./card.module.css";
import lua from "./../../public/lua.png";
import cafe from "./../../public/xicara-de-cafe.png";
import livro from "./../../public/abra-o-livro.png";
import reiniciar from "./../../public/reiniciar.png";
import play from "./../../public/botao-play.png";
import pause from "./../../public/pause.png";
import pauseSound from "../../sounds/pause.mp3";

import { Tomato } from "../Tomato";
import { useTimer, type PomodoroMode } from "../Timer/Timer";
import AddTask from "../AddTask";
import Dialog from "../Dialog";
import ToDoForm from "../ToDoForm";
// import ToDoForm from "../ToDoForm"; // importe quando existir

type CardProps = {
    children: ReactNode;
};

const Card = ({ children }: CardProps) => {
    return (
        <section className={styles.principalcard}>
            {children}
        </section>
    );
};

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
        },
    });

    return (
        <>
            <div className={styles.buttonGroup}>
                {MODE_OPTIONS.map(({ key, icon, alt }) => (
                    <div
                        key={key}
                        className={`${styles.btnoption} ${
                            timer.mode === key ? styles.ativo : ""
                        }`}
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
        </>
    );
};

export const CardTodo = () => {
    const [showDialog, setShowDialog] = useState(false);

    const openFormTodoDialog = () => {
        setShowDialog(true);
    };

    const closeFormTodoDialog = () => {
        setShowDialog(false);
    };

    const handleFormSubmit: React.ComponentProps<"form">["onSubmit"] = (
        event
    ) => {
        event?.preventDefault();

        const form = event!.currentTarget;
        const formData = new FormData(form);

        const description = formData.get("description")?.toString() ?? "";

        console.log(description);

        form.reset();
        closeFormTodoDialog();
    };

    return (
        <>
            <div className={styles.text}>
                <h2>📝 Minhas Tarefas</h2>

                <AddTask>
                    <Dialog
                        isOpen={showDialog}
                        onClose={closeFormTodoDialog}
                    >
                        <ToDoForm
                            onSubmit={handleFormSubmit}
                            defaultValue=""
                        />
                    </Dialog>

                    <button
                        className={styles.adicionarTarefa}
                        type="button"
                        onClick={openFormTodoDialog}
                    >
                        +
                    </button>
                </AddTask>
            </div>

            <div className={styles.todoActions}>
                <button>A fazer (3)</button>
                <button>Concluídas (2)</button>
            </div>

            <div className={styles.tarefaContainer}>
                <div className={styles.tarefas}>
                    <input type="checkbox" />
                    <label>Estudar JavaScript por 50 minutos</label>
                </div>

                <div className={styles.tarefas}>
                    <input type="checkbox" />
                    <label>Estudar React por 25 minutos</label>
                </div>

                <div className={styles.tarefas}>
                    <input type="checkbox" />
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
    );
};

Card.Pomodoro = CardPomodoro;
Card.Todo = CardTodo;

export default Card;