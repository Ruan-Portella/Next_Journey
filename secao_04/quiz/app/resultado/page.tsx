'use client' 
import styles from '../../style/Resultado.module.css'
import { useSearchParams } from 'next/navigation'

export default function resultado() {
    const searchParams = useSearchParams()

    const total = searchParams.get('total')
    const certas = searchParams.get('certas')
    const percentual = Math.round((Number(certas) / Number(total)) * 100);

    return (
        <div className={styles.resultado}>
            <h1>Resultado</h1>
            <div>{total}</div>
            <div>{certas}</div>
            <div>{`${percentual}%`}</div>
        </div>
    )
}