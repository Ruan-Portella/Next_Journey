'use client'
import Questionario from '@/components/Questionario'
import QuestaoModel from '@/model/questao'
import RespostaModel from '@/model/resposta'
import { useEffect, useState } from 'react'

const questaoMock = new QuestaoModel(1, 'Melhor cor?', [ 
  RespostaModel.errada('Verde'), 
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idDasQuestoes = await resp.json();
    setIdsDasQuestoes(idDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    
  }

  useEffect(() => {
    carregarIdsQuestoes();
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questao: QuestaoModel) {

  }

  function irParaProx() {

  }

  return (
    <div>
      <Questionario 
        questao={questao}
        ultima={true}
        questaoRespondida={questaoRespondida}
        irParaProx={irParaProx}
      />
    </div>
  )
}
