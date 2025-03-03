import FacebookIcone from './icones/FacebookIcone.jsx'
import InstagramIcone from './icones/InstagramIcone.jsx'
import TwitterIcone from './icones/TwitterIcone.jsx'
import LinkedinIcone from './icones/LinkedinIcone.jsx'


export default function Rodape() {
    return (
        <>
            <div className="bg-[url('./assets/bg-rodape.jpg')] bg-cover">
                <div className="flex justify-center bg-damastech/80">
                    <div className="container py-10">
                        <div className="flex text-white justify-around border-b border-white pb-5">
                            <ul className="flex flex-col gap-y-4">
                                <li><h3 className='font-bold mb-2'>Coluna Um</h3></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                            </ul>
                            <ul className="flex flex-col gap-y-4">
                                <li><h3 className='font-bold mb-2'>Coluna Dois</h3></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                            </ul>
                            <ul className="flex flex-col gap-y-4">
                                <li><h3 className='font-bold mb-2'>Coluna Três</h3></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                                <li><a href="#">Link Um</a></li>
                            </ul>
                        </div>
                        <ul className="flex gap-x-3 justify-center mt-4">
                            <li className='hover:scale-105 transition'><a href="#"><FacebookIcone cor='white'/></a></li>
                            <li className='hover:scale-105 transition'><a href="#"><InstagramIcone width='25' cor='white'/></a></li>
                            <li className='hover:scale-105 transition'><a href="#"><TwitterIcone width='25' cor='white'/></a></li>
                            <li className='hover:scale-105 transition'><a href="#"><LinkedinIcone width='24' cor='white'/></a></li>
                        </ul>
                        <p className="mt-3 text-center text-white text-sm">© 2025. Todos os direitos reservados.</p>
                        <ul className="flex gap-x-14 justify-center mt-4">
                            <li className="mt-3 text-center text-white text-sm"><a href="#">Política de Privacidade</a></li>
                            <li className="mt-3 text-center text-white text-sm"><a href="#">Termos e Condições</a></li>
                            <li className="mt-3 text-center text-white text-sm"><a href="#">Política de Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
