import Titulo from './Titulo.jsx'
import Container from './Container.jsx'
// imagens
import damastechLogo from './assets/logo.svg'

export default function Cadastro() {
    return (
        <>
            <Container>
                <Titulo>Crie sua jornada conosco</Titulo>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <div className='w-full flex flex-col items-center'>
                        <img src={damastechLogo} className="" width={300} alt="damastech"></img>
                        <p className="text-md text-damastech font-semibold text-center px-20">Somos uma plataforma de empregabilidade voltada para a comunidade feminina</p>
                    </div>
                    <div className='w-full flex flex-col gap-y-7 p-10 border border-damastech rounded-2xl'>
                        <h2 className="text-3xl text-damastech font-semibold text-center">Comece agora</h2>
                        <input type="text" className="border-2 border-damastech rounded-xl h-10 pl-4 placeholder:font-bold" placeholder='Nome da empresa' maxLength={255} autoComplete='off' required />
                        <input type="text" className="border-2 border-damastech rounded-xl h-10 pl-4 placeholder:font-bold" placeholder='CNPJ' maxLength={255} autoComplete='off' required />
                        <input type="email" className="border-2 border-damastech rounded-xl h-10 pl-4 placeholder:font-bold" placeholder='@Email' maxLength={255} autoComplete='off' required />
                        <input type="password" className="border-2 border-damastech rounded-xl h-10 pl-4 placeholder:font-bold" placeholder='*Senha' maxLength={255} autoComplete='off' required />
                        <input type="password" className="border-2 border-damastech rounded-xl h-10 pl-4 placeholder:font-bold" placeholder='*Confirmar Senha' maxLength={255} autoComplete='off' required />
                        <button className="bg-damastech hover:bg-damastech-900 py-2 rounded-2xl text-white text-lg font-semibold cursor-pointer transition">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </Container>
        </>
    )
}
