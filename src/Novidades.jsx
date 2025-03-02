import EmailIcone from './icones/EmailIcone.jsx'

export default function Novidades() {
    return (
        <>
            <div className="flex justify-center bg-gray-200">
                <div className="container py-10">
                    <h2 className="text-2xl font-semibold text-center">Gostaria de receber nossos emails com as Novidades?</h2>
                    <h3 className="text-xl font-semibold text-center">Basta cadastrar o seu email logo abaixo</h3>

                    <form action="" className='w-1/2 mx-auto mt-7 flex border-b-2 border-gray-400'>
                        <EmailIcone cor="black"/>
                        <input type="email" className="w-full pl-4 placeholder:text-gray-400" placeholder='Endereço de e-mail' maxLength={255} autoComplete='off' required />
                        <button className='text-gray-400'>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}
