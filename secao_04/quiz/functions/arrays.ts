export function embaralhar(elementos: any[]): any[] {
    return elementos.map((questao) => ({ questao, aleatorio: Math.random() }))
    .sort((questao1, questao2) => questao1.aleatorio - questao2.aleatorio)
    .map((questao) => questao.questao)
}