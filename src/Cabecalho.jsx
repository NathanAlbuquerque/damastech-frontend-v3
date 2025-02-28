import damastechLogo from './assets/logo.svg'

function Cabecalho() {
  return (
    <>
        <header className="py-6 px-15 w-full bg-white">
            <section className="grid grid-cols-[auto_1fr_auto] gap-5">
                <img src={damastechLogo} className="block" alt="damastech"></img>
                <nav>
                    <ul className="flex justify-evenly text-xl font-extralight m-0 p-0 h-full list-none">
                    <li><a href="/" className="text-gray-900 flex gap-3 p-4">Conheça-nos</a></li>
                    <li><a href="/" className="text-gray-900 flex gap-3 p-4">Serviços</a></li>
                    <li><a href="/" className="text-gray-900 flex gap-3 p-4">Depoimentos</a></li>
                    </ul>
                </nav>
                <div className="flex items-center w-52 h-16 border border-black rounded-2xl gap-4">
                    <a href="/" className="text-gray-900 p-3 ml-2">Login</a>
                    <a href="/" className="text-white bg-damastech rounded-2xl py-2 px-5">Registrar</a>
                </div>
            </section>
        </header>
    </>
  )
}

export default Cabecalho
