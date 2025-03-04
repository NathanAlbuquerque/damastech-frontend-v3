import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecalho from './Cabecalho.jsx'
import Rodape from './Rodape.jsx'
import Empresa from './Empresa.jsx'
import Usuaria from './Usuaria.jsx'

export default function App() {
  return (
    <>
      <Cabecalho/>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/empresa" element={<Empresa/>}/>
            <Route path="/usuaria" element={<Usuaria/>}/>
          </Routes>
        </BrowserRouter>
      </main>
      <Rodape/>
    </>
  )
}
