import styles from '../style/Questionario.module.css'
import QuestaoModel from "@/model/questao"
import Questao from './Questao'
import Botao from './Botao'

interface QuestionarioProps {
    questao: QuestaoModel
    ultima: boolean
    questaoRespondida: (questao: QuestaoModel) => void
    irParaProx: () => void
}

export default function Questionario(props: QuestionarioProps) {
    function respostaFornecida(indice: number) {
        if(!props.questao.respondida) {
            props.questaoRespondida(props.questao.responderCom(indice));
        }
    }

    return (
        <div className={styles.questionario}>
            {
                props.questao ?  (
                <Questao 
                    valor={props.questao}
                    tempoParaResposta={15}
                    respostaFornecida={respostaFornecida}
                    tempoEsgotado={props.irParaProx}
                />
                ) : false
            }
                <Botao onClick={props.irParaProx} texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
        </div>
    )
}