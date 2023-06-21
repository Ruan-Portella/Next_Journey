'use client'
import Questionario from '@/components/Questionario'
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

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irParaProx() {

  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProx={irParaProx}
      />
    </div>
  )
}
