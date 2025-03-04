import Titulo from '../Titulo.jsx'
import Botao from '../Botao.jsx'
import Container from '../Container.jsx'
import EntrarIcone from '../icones/EntrarIcone.jsx'

export default function Jornada({ passos }) {
    return (
        <>
            <Container>
                <Titulo>Crie sua jornada conosco</Titulo>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 1</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">{ passos[0].instrucao }</h4>
                    </div>
                    <img src={ passos[0].imagem } width="250" alt="" />
                </div>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <img src={ passos[1].imagem } width="250" alt="" />
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 2</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">{ passos[1].instrucao }</h4>
                    </div>
                </div>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 3</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">{ passos[2].instrucao }</h4>
                    </div>
                    <img src={ passos[2].imagem } width="250" alt="" />
                </div>
                <div className="flex justify-center mt-15">
                    <Botao>SAIBA MAIS <EntrarIcone cor="white"/></Botao>
                </div>
            </Container>
        </>
    )
}
