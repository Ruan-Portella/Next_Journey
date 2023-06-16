export default function questao(req, res) {
    if (req.method === 'GET') {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é a sua cor?',
            respostas: [
                'Branca', 'Vermelha', 'Amarelo'
            ]
        })
    } else {
        res.status(405).send()
    }
}