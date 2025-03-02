import Botao from './Botao.jsx'
import EntrarIcone from './icones/EntrarIcone'

function Banner() {
    return (
        <>
            <div className="py-30 flex flex-col justify-center gap-6 px-20 bg-red-300">
                <h1 className="max-w-7/12 text-5xl font-bold text-damastech"><span className="text-black">DAMAS TECH</span>, ENCONTRE O SEU TALENTO AQUI!</h1>
                <p className="w-1/2">Capacitação e recrutamento de mulheres preparadas para transformar seu time e impulsionar seus resultados!</p>
                <Botao>SAIBA MAIS <EntrarIcone cor="white"/></Botao>
            </div>
        </>
    )
}

export default Banner
