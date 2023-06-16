import {useState, useEffect} from 'react';

export default function questao() {

    const [questao, setQuestao] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/questao/123')
        .then(resp => resp.json())
        .then(data => setQuestao(data));
    }, []);

    function renderizarRespostas() {
        if (questao) {
            return questao.respostas.map((resp, index) => {
                return <li key={index} >{resp}</li>
            })
        }
        return false;
    }


    return (
        <div>
            <h1>Questão</h1>
            <span>{questao?.enunciado}</span>
            <ul>
                {renderizarRespostas()}
            </ul>
        </div>
    )
}