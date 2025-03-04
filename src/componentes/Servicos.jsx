import Titulo from '../Titulo.jsx'
import Botao from '../Botao.jsx'
import Container from '../Container.jsx'
import EntrarIcone from '../icones/EntrarIcone.jsx'

export default function Servicos({ servicos }) {
    
    return (
        <>
            <Container cor="damastech">
                <Titulo cor="white">VEJA O QUE LHE ESPERA</Titulo>
                <div className="flex px-20 gap-x-10 mt-15">
                    { servicos.map(servico => (
                        <div key={servico.nome} className="border-2 border-white px-8 py-6 rounded-2xl flex flex-col gap-4 items-center justify-center">
                            { servico.imagem }
                            <h3 className="font-bold text-white">{ servico.nome }</h3>
                            <p className='text-white'>{ servico.mensagem }</p>
                        </div>
                    )) }
                </div>
                <div className="flex justify-center mt-15">
                    <Botao cor="white" texto="damastech">SAIBA MAIS <EntrarIcone/></Botao>
                </div>
            </Container>
        </>
    )
}
