import { useEffect, useState } from 'react';
import style from '../../../styles/Jogo.module.css'
import React from 'react';
import { useRouter } from "next/router";
import { atualizarPortas, criarPortar } from '../../../functions/portas';
import Porta from '../../../components/Porta';
import Link from 'next/link';

export default function Jogo() {
    const router = useRouter();
    const [portas, setPortas] = useState([])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente =  Math.floor(Math.random() * portas + 1);
        setPortas(criarPortar(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}></Porta>
        })
    }
    return (
        <div className={style.jogo}>
            <div className={style.portas}>
                {renderizarPortas()}
            </div>
            <div className={style.botoes}>
                <Link href={`/`}>
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}