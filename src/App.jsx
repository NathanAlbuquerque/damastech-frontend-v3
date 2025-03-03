// import './App.css'
import Cabecalho from './Cabecalho.jsx'
import Banner from './Banner.jsx'
import Depoimentos from './Depoimentos.jsx'
import Servicos from './Servicos.jsx'
import Jornada from './Jornada.jsx'
import Cadastro from './Cadastro.jsx'
import Novidades from './Novidades.jsx'
import Rodape from './Rodape.jsx'

export default function App() {
  return (
    <>
      <Cabecalho/>
      <main>
        <Banner/>
        <Depoimentos/>
        <Servicos/>
        <Jornada/>
        <Cadastro/>
        <Novidades/>
        <Rodape/>
      </main>
    </>
  )
}
