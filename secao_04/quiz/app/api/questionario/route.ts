import { NextResponse } from "next/server"
import questoes from "../bancodeQuestoes"
import { embaralhar } from "@/functions/arrays"

export async function GET(request: any, {params}: any) {
        const questoesId = questoes.map(questao => questao.id)
        return NextResponse.json( embaralhar(questoesId) , { status: 200 })
}