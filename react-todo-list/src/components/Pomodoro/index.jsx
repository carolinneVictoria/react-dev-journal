import { useEffect, useState } from "react";

export function Pomodoro() {
    const [tempo, setTempo] = useState(25 * 60);
    const [tempoInicial, setTempoInicial] = useState(25 * 60);
    const [rodando, setRodando] = useState(false);

    useEffect(() => {
        let intervalo;

        if (rodando) {
            intervalo = setInterval(() => {
                setTempo(prev => {
                    if (prev <= 1) {
                        clearInterval(intervalo);
                        setRodando(false);
                        alert("Tempo finalizado!");
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalo);
    }, [rodando]);

    const iniciarOuPausar = () => {
        setRodando(prev => !prev);
    };

    const reiniciar = () => {
        setRodando(false);
        setTempo(tempoInicial);
    };

    const selecionarTempo = (minutos) => {
        if (rodando) return;

        const segundos = minutos * 60;

        setTempoInicial(segundos);
        setTempo(segundos);
    };

    const minutos = String(Math.floor(tempo / 60)).padStart(2, "0");
    const segundos = String(tempo % 60).padStart(2, "0");

    return (
        <div className="watch">
            <h1>{minutos}:{segundos}</h1>

            <div className="quick-times">
                <button onClick={() => selecionarTempo(25)}>
                    25 min
                </button>

                <button onClick={() => selecionarTempo(50)}>
                    50 min
                </button>

                <button onClick={() => selecionarTempo(90)}>
                    90 min
                </button>
            </div>

            <div className="controls">
                <button onClick={iniciarOuPausar}>
                    {rodando ? "Pausar" : "Começar"}
                </button>

                <button onClick={reiniciar}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

export default Pomodoro;