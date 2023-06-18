import { NextResponse } from "next/server"
import questoes from "../bancodeQuestoes"

export async function GET(request: any, {params}: any) {
        const questoesId = questoes.map(questao => questao.id)
        return NextResponse.json({ questoesId }, { status: 202 })
}