// import { Link } from 'react-router-dom';
import damastechLogo from './assets/logo.svg'

export default function Cabecalho() {
  return (
    <>
        <header className="py-6 px-15 w-full bg-white">
            <section className="grid grid-cols-[auto_1fr_auto] gap-5">

                {/* <Link to="/"></Link> */}
                <a href="/"><img src={damastechLogo} className="block" alt="damastech"></img></a>
                <nav>
                    <ul className="flex justify-evenly text-xl font-extralight m-0 p-0 h-full list-none">
                    <li><a href="#conheca-nos" className="text-gray-900 flex gap-3 p-4 hover:bg-gray-100 rounded-2xl transition">Conheça-nos</a></li>
                    <li><a href="#servicos" className="text-gray-900 flex gap-3 p-4 hover:bg-gray-100 rounded-2xl transition">Serviços</a></li>
                    <li><a href="#depoimentos" className="text-gray-900 flex gap-3 p-4 hover:bg-gray-100 rounded-2xl transition">Depoimentos</a></li>
                    </ul>
                </nav>
                <div className="flex items-center w-52 h-16 border border-black rounded-2xl gap-4">
                    <a href="#" className="text-gray-900 p-3 ml-2 rounded-2xl hover:bg-gray-100 transition">Login</a>
                    <a href="#" className="text-white bg-damastech rounded-2xl py-2 px-5 hover:bg-damastech-900 transition">Registrar</a>
                </div>
            </section>
        </header>
    </>
  )
}
