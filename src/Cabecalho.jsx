import damastechLogo from './assets/logo.svg'

function Cabecalho() {
  return (
    <>
        <header class="py-10 px-15 w-full bg-white">
            <section class="grid grid-cols-[auto_1fr_auto] gap-5">
                <img src={damastechLogo} class="block" alt="damastech"></img>
                <nav>
                    <ul class="flex justify-evenly text-xl font-extralight m-0 p-0 h-full list-none">
                    <li><a href="/" class="text-gray-900 flex gap-3 p-4">Conheça-nos</a></li>
                    <li><a href="/" class="text-gray-900 flex gap-3 p-4">Serviços</a></li>
                    <li><a href="/" class="text-gray-900 flex gap-3 p-4">Depoimentos</a></li>
                    </ul>
                </nav>
                <div class="flex items-center w-52 h-16 border border-black rounded-2xl gap-4">
                    <a href="/" class="text-gray-900 p-3 ml-2">Login</a>
                    <a href="/" class="text-white bg-damastech rounded-2xl py-2 px-5">Registrar</a>
                </div>
            </section>
        </header>
    </>
  )
}

export default Cabecalho
