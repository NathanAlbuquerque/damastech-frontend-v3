import damastechLogo from './assets/logo.svg'
import Botao from './Botao.jsx'
import EntrarIcone from './icones/EntrarIcone.jsx'
import { Link } from 'react-router-dom';

export default function Escolha() {
    return (
        <div className="bg-[url('./assets/bg-escolha.png')] bg-no-repeat bg-contain bg-center">
            <div className="flex justify-center bg-gray-300/80 py-20">
                <div className="container">
                    <div className='flex items-center justify-around'>
                        <img src={damastechLogo} className="block" width={350} alt="damastech"></img>
                        <div className="w-1/2 bg-damastech flex flex-col px-10 py-20 rounded-2xl gap-y-6">
                        <div className='border-b border-white pb-10'>
                                <p className='text-center text-white'>Acesse profissionais qualificadas, alinhadas à sua cultura, e construa equipes sólidas para resultados consistentes.</p>
                                <Link to="empresa" className="flex justify-center mt-10">
                                    <Botao cor="white" texto="black">EMPRESA <EntrarIcone cor="black"/></Botao>
                                </Link>
                            </div>
                            <div>
                                <p className='text-center text-white'>Amplie suas oportunidades, desenvolva novas habilidades e conecte-se com empresas que valorizam o seu talento.</p>
                                <Link to="usuaria" className="flex justify-center mt-10">
                                    <Botao cor="white" texto="black">USUÁRIA <EntrarIcone cor="black"/></Botao>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}