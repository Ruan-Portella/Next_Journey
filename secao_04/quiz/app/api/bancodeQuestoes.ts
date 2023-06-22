import QuestaoModel from "@/model/questao";
import RespostaModel from "@/model/resposta";

const questoes: QuestaoModel[] = [
new QuestaoModel(306, 'Qual é o nome do Criador desse Quiz?', [
        RespostaModel.errada('Naur'),
        RespostaModel.errada('Portella'),
        RespostaModel.errada('Adenilson'),
        RespostaModel.certa('Ruan'),
    ]),
    new QuestaoModel(202, 'Qual é a idade do Criador desse Quiz?', [
        RespostaModel.errada('1'),
        RespostaModel.errada('10'),
        RespostaModel.errada('20'),
        RespostaModel.certa('18'),
    ]),
    new QuestaoModel(203, 'Qual é a Stack do Criador desse Quiz?', [
        RespostaModel.errada('Front End'),
        RespostaModel.errada('Programador'),
        RespostaModel.errada('Back End'),
        RespostaModel.certa('Full Stack'),
    ]),
    new QuestaoModel(204, 'Qual é o site do Criador desse Quiz?', [
        RespostaModel.errada('portella.dev'),
        RespostaModel.errada('morales.dev'),
        RespostaModel.errada('adenilson.dev'),
        RespostaModel.certa('ruanportella.dev'),
    ]),
]

export default questoes