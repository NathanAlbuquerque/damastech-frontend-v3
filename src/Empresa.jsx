import Banner from './componentes/Banner.jsx'
import Depoimentos from './componentes/Depoimentos.jsx'
import Servicos from './componentes/Servicos.jsx'
import Jornada from './componentes/Jornada.jsx'
import Cadastro from './Cadastro.jsx'
import Novidades from './Novidades.jsx'

import EstrelaIcone from './icones/EstrelaIcone.jsx'
import CorrerIcone from './icones/CorrerIcone.jsx'
import FogoIcone from './icones/FogoIcone.jsx'

import JornadaPasso1 from './assets/Jornada Empresa - passo 1.png'
import JornadaPasso2 from './assets/Jornada Empresa - passo 2.png'
import JornadaPasso3 from './assets/Jornada Empresa - passo 3.png'

export default function Empresa () {

    const servicos = [
        {
            nome: "BANCO DE TALENTOS",
            mensagem: "Acesse a profissionais qualificadas e prontas para fazer a diferença na sua empresa.",
            imagem: <EstrelaIcone width={100} height={100} cor="white"/>
        },
        {
            nome: "BAIXO TURN-OVER",
            mensagem: "Contrate talentos que permanecem, promovendo estabilidade e reduzindo custos para sua empresa.",
            imagem: <CorrerIcone width={100} height={100} cor="white"/>
        },
        {
            nome: "MATCH E FIT CULTURAL",
            mensagem: "Encontramos candidatos que se alinham perfeitamente à cultura da sua empresa, gahrantindo maior engajamento e produtividade.",
            imagem: <FogoIcone width={100} height={100} cor="white"/>
        }
    ]

    const passosJornada = [
        {
            instrucao: "Crie sua conta",
            imagem: JornadaPasso1
        },
        {
            instrucao: "Escolha os talentos",
            imagem: JornadaPasso2
        },
        {
            instrucao: "Acompanhe e contrate",
            imagem: JornadaPasso3
        }
    ]

    return (
        <>
            <Banner titulo="ENCONTRE O SEU TALENTO AQUI!" subtitulo="Capacitação e recrutamento de mulheres preparadas para transformar seu time e impulsionar seus resultados!"/>
            <Depoimentos/>
            <Servicos servicos={servicos}/>
            <Jornada passos={passosJornada}/>
            <Cadastro/>
            <Novidades/>
        </>
    )
}