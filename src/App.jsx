// import './App.css'
import Cabecalho from './Cabecalho.jsx'
import Banner from './Banner.jsx'
import Depoimentos from './Depoimentos.jsx'
import Servicos from './Servicos.jsx'

function App() {
  return (
    <>
      <Cabecalho/>
      <main>
        <Banner/>
        <hr></hr>
        <Depoimentos/>
        <Servicos/>
      </main>
    </>
  )
}

export default App
