import { NextResponse } from "next/server"
import questoes from "../../bancodeQuestoes"

export async function GET(request: any, {params}: any) {
    return NextResponse.json(questoes[0].converterParaObjeto())
}