import React from 'react';
import PortaModel from '../model/porta';
import styles from '../styles/Porta.module.css';
import Present from './Presente';

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    const alternarSelecao = e => props.onChange(porta.alternarSelecao());
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    };

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
            {
                porta.fechada ? (
                    <div className={styles.porta}>
                        <div className={styles.numero}>{porta.numero}</div>
                        <div className={styles.macaneta} onClick={abrir}></div>
                    </div>
                ) : (porta.temPresente && <Present />)
            }
            </div> 
            <div className={ styles.chao }></div>
        </div> 
    )
}