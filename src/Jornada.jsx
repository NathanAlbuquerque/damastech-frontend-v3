import Titulo from './Titulo.jsx'
import Botao from './Botao.jsx'
import Container from './Container.jsx'
import EntrarIcone from './icones/EntrarIcone.jsx'
// imagens
import JornadaPasso1 from './assets/imagens/Jornada - passo 1.png'
import JornadaPasso2 from './assets/imagens/Jornada - passo 2.png'
import JornadaPasso3 from './assets/imagens/Jornada - passo 3.png'

export default function Jornada() {
    return (
        <>
            <Container>
                <Titulo>Crie sua jornada conosco</Titulo>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 1</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">crie sua conta</h4>
                    </div>
                    <img src={JornadaPasso1} width="250" alt="" />
                </div>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <img src={JornadaPasso2} width="250" alt="" />
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 2</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">Escolha os talentos</h4>
                    </div>
                </div>

                <div className="flex items-center justify-around gap-x-10 mt-15">
                    <div>
                        <h3 className="text-xl text-damastech font-semibold text-center uppercase">Passo 3</h3>
                        <h4 className="text-xl font-semibold text-center uppercase">Acompanhe e contrate</h4>
                    </div>
                    <img src={JornadaPasso3} width="250" alt="" />
                </div>
                <div className="flex justify-center mt-15">
                    <Botao>SAIBA MAIS <EntrarIcone cor="white"/></Botao>
                </div>
            </Container>
        </>
    )
}
