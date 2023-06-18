import { NextResponse } from "next/server"
import questoes from "../../bancodeQuestoes"

export async function GET(request: any, {params}: any) {
    const id = Number(params.id)
    const unicaQuestao = questoes.filter(questao => questao.id === id)
    if (unicaQuestao.length === 1) {
        const questaoSelecionada = unicaQuestao[0].embaralharRespostas()
        return NextResponse.json( questaoSelecionada.converterParaObjeto() , { status: 200 })
    } else {
        return NextResponse.json({ error: 'mensagem' }, { status: 404 })
    }
}