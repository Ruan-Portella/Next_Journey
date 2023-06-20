'use client'
import Botao from '@/components/Botao'
import Questao from '@/components/Questao'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [ 
  RespostaModel.errada('Verde'), 
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
   if (!questao.respondida) setQuestao(questao.responderCom(-1))
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
    <Questao valor={questao} tempoParaResposta={15} respostaFornecida={respostaFornecida}  tempoEsgotado={tempoEsgotado}/>
    <Botao texto='Próximo' href='/resultado'/>
    </div>
  )
}
