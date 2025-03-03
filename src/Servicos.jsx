import Titulo from './Titulo.jsx'
import Botao from './Botao.jsx'
import Container from './Container.jsx'
import EntrarIcone from './icones/EntrarIcone.jsx'

export default function Servicos() {
    const depoimentos = [
        {
            nome: "BANCO DE TALENTOS",
            mensagem: "Acesse a profissionais qualificadas e prontas para fazer a diferença na sua empresa."
        },
        {
            nome: "BAIXO TURN-OVER",
            mensagem: "Contrate talentos que permanecem, promovendo estabilidade e reduzindo custos para sua empresa."
        },
        {
            nome: "MATCH E FIT CULTURAL",
            mensagem: "Encontramos candidatos que se alinham perfeitamente à cultura da sua empresa, gahrantindo maior engajamento e produtividade."
        }
    ]
    return (
        <>
            <Container cor="damastech">
                <Titulo cor="white">VEJA O QUE LHE ESPERA</Titulo>
                <div className="flex px-20 gap-x-10 mt-15">
                    { depoimentos.map(depoimento => (
                        <div className="border-2 border-white px-8 py-6 rounded-2xl flex flex-col gap-4 items-center justify-center">
                        <img src="/depoimentos/empresa-foto.png" width="150" height="50"></img>
                        <h3 className="font-bold text-white">Nome da empresa</h3>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum ullam consequatur facere natus, illo inventore et adipisci vero neque ex aspernatur laborum? Non eius a, incidunt enim autem aliquam.</p>
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
