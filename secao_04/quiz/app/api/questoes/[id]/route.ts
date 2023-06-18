import { NextResponse } from "next/server"

export async function GET(request: any, {params}: any) {
    return NextResponse.json({message: 'ruan', id: Number(params.id)})
}