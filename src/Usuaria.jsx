import Banner from './componentes/Banner.jsx'
import Depoimentos from './componentes/Depoimentos.jsx'
import Servicos from './componentes/Servicos.jsx'
import Jornada from './componentes/Jornada.jsx'
import Cadastro from './Cadastro.jsx'
import Novidades from './Novidades.jsx'

import OlhoIcone from './icones/OlhoIcone.jsx'
import UsuariosIcone from './icones/UsuariosIcone.jsx'
import VideoIcone from './icones/VideoIcone.jsx'

import JornadaPasso1 from './assets/Jornada Usuaria - passo 1.png'
import JornadaPasso2 from './assets/Jornada Usuaria - passo 2.png'
import JornadaPasso3 from './assets/Jornada Usuaria - passo 3.png'

export default function Usuaria () {

    const servicos = [
        {
            nome: "VISIBILIDADE NO MERCADO",
            mensagem: "Encontramos candidatos que se alinham perfeitamente à cultura da sua empresa, gahrantindo maior engajamento.",
            imagem: <OlhoIcone width={100} height={100} cor="white"/>
        },
        {
            nome: "CURSOS GRATUITOS",
            mensagem: "Acesse a profissionais qualificadas e prontas para fazer a diferença na sua empresa.",
            imagem: <VideoIcone width={100} height={100} cor="white"/>
        },
        {
            nome: "NETWORKING",
            mensagem: "Acesse a profissionais qualificadas e prontas para fazer a diferença na sua empresa.",
            imagem: <UsuariosIcone width={100} height={100} cor="white"/>
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
            <Banner titulo="Aprimore suas habilidades aqui" subtitulo="Capacitação e recrutamento de mulheres preparadas para transformar seu time e impulsionar seus resultados!"/>
            <Depoimentos/>
            <Servicos servicos={servicos}/>
            <Jornada passos={passosJornada}/>
            <Cadastro/>
            <Novidades/>
        </>
    )
}