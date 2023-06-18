import { NextResponse } from "next/server"
import questoes from "../../bancodeQuestoes"

export async function GET(request: any, {params}: any) {
    const id = Number(params.id)
    const questaoSelecionada = questoes.filter(questao => questao.id === id)
    if (questaoSelecionada.length === 1) {
        const questao = questaoSelecionada[0].embaralharRespostas()
        return NextResponse.json( questao.converterParaObjeto() , { status: 200 })
    } else {
        return NextResponse.json({ error: 'mensagem' }, { status: 404 })
    }
}