import Titulo from './Titulo.jsx'
import Botao from './Botao.jsx'
import Container from './Container.jsx'
import EntrarIcone from './icones/EntrarIcone.jsx'

export default function Depoimentos() {
    const depoimentos = [
        {
            nome: "Nome da empresa",
            mensagem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum ullam consequatur facere natus, illo inventore et adipisci vero neque ex aspernatur laborum? Non eius a, incidunt enim autem aliquam."
        },
        {
            nome: "Nome da empresa",
            mensagem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum ullam consequatur facere natus, illo inventore et adipisci vero neque ex aspernatur laborum? Non eius a, incidunt enim autem aliquam."
        },
        {
            nome: "Nome da empresa",
            mensagem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum ullam consequatur facere natus, illo inventore et adipisci vero neque ex aspernatur laborum? Non eius a, incidunt enim autem aliquam."
        }
    ]
    return (
        <>
            <Container>
                <Titulo>Veja o que as empresas parceiras dizem sobre nossa solução</Titulo>
                <div className="flex px-20 gap-x-10 mt-15">
                    { depoimentos.map(depoimento => (
                        <div className="border-2 border-damastech px-8 py-6 rounded-2xl flex flex-col gap-4 items-center justify-center">
                        <img src="/depoimentos/empresa-foto.png" width="150" height="50"></img>
                        <h3 className="font-bold">Nome da empresa</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum ullam consequatur facere natus, illo inventore et adipisci vero neque ex aspernatur laborum? Non eius a, incidunt enim autem aliquam.</p>
                    </div>
                    )) }
                </div>
                <div className="flex justify-center mt-15">
                    <Botao>SAIBA MAIS <EntrarIcone cor="white"/></Botao>
                </div>
            </Container>
        </>
    )
}
