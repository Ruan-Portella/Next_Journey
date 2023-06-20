import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../style/Temporizador.module.css'

interface TemporizadorProps {
    duracao: number, 
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer 
                duration={props.duracao}
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={['#BCE596', '#F7B801', '#A30000']}
                colorsTime={[10, 5, 0]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}