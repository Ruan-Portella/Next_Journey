import styles from '../styles/EntradaNumerica.module.css'
import React from 'react'

interface EntradaNumericasProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica(props: EntradaNumericasProps) {
    const dec = () => {
        if (props.value <= 0) return false
        props.onChange(props.value - 1)
    };
    const inc = () => props.onChange(props.value + 1);

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{props.text}</span>
            <span className={styles.value}>{props.value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}