import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link,
        Textos, TextoModelo, Cima, Paragrafo, PesquisaModelo, Paragrafo2} from './aprendendo';
import Piramide from '../../assets/imagens/pirâmide.svg';

function Aprendendo(){
    return(
        <div>
            <header>
                <Nav>
                    <div className="logo">
                        <a href="http://localhost:5173/">
                            <img src={logo} alt="logo" />
                        </a>                    
                    </div>
                    <div className="links">
                        <NavBar>
                            <li><NavLinks href="http://localhost:5173/">Home</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/sobre">Sobre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/login">Entre</NavLinks></li>
                            <li><NavLinks href="http://localhost:5173/perfil">Perfil</NavLinks></li>
                        </NavBar>
                    </div>
                </Nav>
            </header>

            <Main>
                <Caixa>
                    <Topo>
                        <Titulo>
                            Aprendendo <br />a <Azul>Aprender</Azul>
                        </Titulo>

                        <Linha></Linha>
                    </Topo>
                    <p>
                        De acordo com a análise de William Glasser, existem maneiras de estudar muito mais eficazes do que outras.
                        A imagem a seguir demonstra, em porcentagem, 
                        quanto cada forma de estudo contribui para a retenção e o aprendizado efetivo do conteúdo desejado.
                    </p>
                    <img src={Piramide} alt="Imagem de pirâmide do aprendizado" />

                    <p>
                        Nesse sentido, para que seu estudo seja bem direcionado e efetivo, utilizando essas métricas como base, 
                        indicaremos algumas metodologias de estudo que 
                        priorizam o método ativo, o qual proporciona maior absorção e retenção de conhecimento.   
                    </p>
                    <Baixo>
                        <Link href="#referenciaQeustione">
                            <Click id="referenciaQeustione">
                                <Bolinha><p>1</p></Bolinha>
                                <p>Questione</p>
                            </Click>
                        </Link>
                            
                        <Link href="#referenciaAssocie">
                            <Click>
                                <Bolinha><p>2</p></Bolinha>
                                <p>Associe o conteúdo</p>
                            </Click>
                        </Link>

                        <Link href="">
                            <Click>
                                <Bolinha><p>3</p></Bolinha>
                                <p>Pratique muito</p>
                            </Click>
                        </Link>

                        <Link href="">
                            <Click>
                                <Bolinha><p>4</p></Bolinha>
                                <p>Aprofunde-se</p>
                            </Click>
                        </Link>
                    </Baixo>
                </Caixa>

                <Textos>
                    <TextoModelo id="referenciaAssocie">
                        <Cima>
                            <Bolinha><p>1</p></Bolinha>
                            <Paragrafo>Questione</Paragrafo>
                            <Linha></Linha>
                        </Cima>
                        <p>
                            Antes de começar a estudar sobre determinado assunto, questione-se sobre o porquê de estudar aquilo. 
                            Defina um objetivo inicial de como aquele conhecimento vai impactar sua vida. Fazer isso é importante, 
                            pois criar um objetivo claro e segui-lo com determinação faz a diferença.
                            Afinal, você não está estudando por estudar; você quer mudar o mundo, não é?
                        </p>
                    </TextoModelo>
                
                    <TextoModelo id="associe">
                        <Cima>
                            <Bolinha><p>2</p></Bolinha>
                            <Paragrafo>Associe o conteúdo</Paragrafo>
                            <Linha></Linha>
                        </Cima>
                        <p>
                            Antes de começar a estudar sobre determinado assunto, questione-se sobre o porquê de estudar aquilo. 
                            Defina um objetivo inicial de como aquele conhecimento vai impactar sua vida. Fazer isso é importante, 
                            pois criar um objetivo claro e segui-lo com determinação faz a diferença.
                            Afinal, você não está estudando por estudar; você quer mudar o mundo, não é?
                        </p>
                    </TextoModelo>
                    
                    <TextoModelo id="pratique">
                        <Cima>
                            <Bolinha><p>3</p></Bolinha>
                            <Paragrafo>Pratique muito</Paragrafo>
                            <Linha></Linha>
                        </Cima>
                        <p>
                            Antes de começar a estudar sobre determinado assunto, questione-se sobre o porquê de estudar aquilo. 
                            Defina um objetivo inicial de como aquele conhecimento vai impactar sua vida. Fazer isso é importante, 
                            pois criar um objetivo claro e segui-lo com determinação faz a diferença.
                            Afinal, você não está estudando por estudar; você quer mudar o mundo, não é?
                        </p>
                    </TextoModelo>
                    
                    <TextoModelo id="aprofunde">
                        <Cima>
                            <Bolinha><p>4</p></Bolinha>
                            <Paragrafo>Aprofunde-se</Paragrafo>
                            <Linha></Linha>
                        </Cima>
                        <p>
                            Antes de começar a estudar sobre determinado assunto, questione-se sobre o porquê de estudar aquilo. 
                            Defina um objetivo inicial de como aquele conhecimento vai impactar sua vida. Fazer isso é importante, 
                            pois criar um objetivo claro e segui-lo com determinação faz a diferença.
                            Afinal, você não está estudando por estudar; você quer mudar o mundo, não é?
                        </p>
                    </TextoModelo>
                    
                    <PesquisaModelo>
                        <h2>Sobre o <Azul>aprendizado</Azul></h2>
                        <Paragrafo2> 
                            Aprender é uma habilidade que nos acompanha por toda a vida. No entanto, muitas vezes nos dedicamos aos estudos 
                            sem conhecer as melhores estratégias para aproveitar ao máximo nosso potencial. O módulo "Aprendendo a Aprender" 
                            foi criado para ajudá-lo a explorar métodos de aprendizagem variados, desde técnicas de memorização até a gestão 
                            eficaz do tempo e a aplicação de ferramentas modernas de estudo.  
                            Aqui, você descobrirá como personalizar seu processo de aprendizagem, identificar seu estilo predominante e adotar 
                            práticas que tornarão seus estudos mais produtivos e significativos. Vamos aprender algumas abordagens e técnicas 
                            que podem ser muito úteis.
                            Pensando em estudar para solucionar um desafio específico, como é proposto nesta trilha, 
                            um dos métodos de estudo mais aplicáveis é o PBL: 
                        </Paragrafo2>
                    </PesquisaModelo>
                    
                    <PesquisaModelo>
                        <h2>Aprendizado Baseado <Azul> em Projetos</Azul></h2>
                        <Paragrafo2> 
                            O método PBL (Problem-Based Learning) é uma abordagem de aprendizado ativa que envolve o estudante diretamente na 
                            solução de problemas reais. Na engenharia, isso significa começar com um desafio concreto e prático, como a construção 
                            de um protótipo, a otimização de um sistema ou a resolução de um problema técnico complexo.  
                            <br />O método se destaca como uma das melhores abordagens de aprendizagem quando o objetivo é solucionar desafios e inovar.
                            Ao conectar teoria e prática por meio de problemas reais, ele incentiva a criatividade, o pensamento crítico e a busca
                            por soluções originais. Essa abordagem coloca o estudante no papel ativo de solucionador, estimulando-o a explorar 
                            diferentes perspectivas e aplicar o conhecimento de forma contextualizada. 
                            Para ilustrar como o PBL pode ser aplicado, tomamos como exemplo um dos maiores desafios da engenharia 
                            contemporânea, o tema dessa trilha de aprendizagem: o gerenciamento dos detritos espaciais.
                        </Paragrafo2>
                        <h2><Azul>Como usar?</Azul></h2>
                        <h3><Azul>1.</Azul> Escolha o problema:</h3>
                        <Paragrafo2>
                            Comece identificando um tema relevante e desafiador que desperte seu interesse. Por exemplo, pensando na questão do 
                            gerenciamento de detritos espaciais, pergunte-se:   
                        </Paragrafo2>
                        <ul>
                            <li>Quais são os impactos do lixo espacial na segurança das missões e na sustentabilidade da exploração
                                 espacial?</li>
                            <li>Quais tecnologias poderiam ser adaptadas ou criadas para resolver essa questão?
                            </li>
                            <li>Que soluções criativas podem ser desenvolvidas para lidar com pequenos e grandes 
                                fragmentos de forma eficiente e sustentável?</li>
                        </ul>
                        <Paragrafo2>
                            Ao definir um problema específico, como projetar satélites autônomos para desintegração e 
                            desvio de detritos espaciais, 
                            você cria um ponto de partida claro e focado para aplicar o método PBL.
                        </Paragrafo2>
                    </PesquisaModelo>
                    
                </Textos>
            </Main>
        </div>
    )
}

export default Aprendendo;