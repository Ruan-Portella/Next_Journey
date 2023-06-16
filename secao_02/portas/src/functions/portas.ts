import PortaModel from "../model/porta";

export function criarPortar(quantidade: number, selecionada: number): any {
    return Array.from({length: quantidade}, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === selecionada

        return new PortaModel(numero, temPresente);
    })
}