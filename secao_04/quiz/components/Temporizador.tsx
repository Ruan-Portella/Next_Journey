import styles from '../style/Temporizador.module.css'

interface TemporizadorProps {
    duracao: number, 
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>

        </div>
    )
}