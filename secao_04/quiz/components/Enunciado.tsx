import style from '../style/Enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado(props: EnunciadoProps) {
    return (
    <div className={style.enunciado}>
        <span className={style.texto}>
            {props.texto}
        </span>
    </div>
    )
}