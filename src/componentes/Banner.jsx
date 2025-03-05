import Botao from '../Botao.jsx'
import EntrarIcone from '../icones/EntrarIcone.jsx'

export default function Banner({ titulo, subtitulo }) {
    return (
        <>
        <div className="bg-[url('./assets/bg-banner.png')] bg-cover bg-right">
            <div className="py-30 flex flex-col justify-center gap-6 px-20 bg-gray-300/80">
                <h1 className="max-w-7/12 text-5xl font-bold text-damastech"><span className="text-black">DAMAS TECH</span>, { titulo }</h1>
                <p className="w-1/2">{ subtitulo }</p>
                <div className="flex">
                    <Botao>SAIBA MAIS <EntrarIcone cor="white"/></Botao>
                </div>
            </div>
            </div>
        </>
    )
}
