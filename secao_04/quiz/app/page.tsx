'use client'
import Questionario from '@/components/Questionario'
import QuestaoModel from '@/model/questao'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()
  const searchParams = useSearchParams()!
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([]);
  const [questao, setQuestao] = useState<QuestaoModel>()
  const [respostasCertas, setrespostasCertas] = useState<number>(0)

  async function carregarIdsQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idDasQuestoes = await resp.json();
    setIdsDasQuestoes(idDasQuestoes);
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  useEffect(() => {
    carregarIdsQuestoes();
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0])
  }, [idsDasQuestoes])

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const certa = questaoRespondida.acertou
    setrespostasCertas(respostasCertas + (certa ? 1 : 0));
  }

  function idProx() {
    if (questao) {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1
    return idsDasQuestoes[proximoIndice];
    }
  }

  function irParaProx() {
    const proximoId = idProx();
    proximoId ? irParaProxQuestao(proximoId) : finalizar();
  }

  function irParaProxQuestao(proximoId: number) {
    carregarQuestao(proximoId)
  }

  function finalizar() {
    router.push('/resultado' + '?' + 'total=' + `${ idsDasQuestoes.length }` + '&' + 'certas=' + `${respostasCertas}`)
  }

  return (
    <div>
      <Questionario 
        questao={questao}
        ultima={idProx() === undefined}
        questaoRespondida={questaoRespondida}
        irParaProx={irParaProx}
      />
    </div>
  )
}
