'use client' 
import Estatistica from '@/components/Estatistica'
import styles from '../../style/Resultado.module.css'
import { useSearchParams } from 'next/navigation'
import Botao from '@/components/Botao'

export default function resultado() {
    const searchParams = useSearchParams()

    const total = searchParams.get('total')
    const certas = searchParams.get('certas')
    const percentual = Math.round((Number(certas) / Number(total)) * 100);

    return (
        <div className={styles.resultado}>
            <h1>Resultado Final</h1>
            <div style={{ display: 'flex' }}>
            <Estatistica valor={total} texto='Perguntas'/>
            <Estatistica valor={certas} texto='Certas' corFundo='#9CD2A4'/>
            <Estatistica valor={`${percentual}%`} texto='Percentual' corFundo='#DE6A33'/>
            </div>
            <Botao href='/' texto='Tentar Novamente'/>
        </div>
    )
}