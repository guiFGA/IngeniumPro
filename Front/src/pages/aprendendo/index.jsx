import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link,
        Textos, TextoModelo, Cima, Paragrafo, PesquisaModelo, Paragrafo2, Referencia} from './aprendendo';
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

                        <Link href="#referenciaPratique">
                            <Click>
                                <Bolinha><p>3</p></Bolinha>
                                <p>Pratique muito</p>
                            </Click>
                        </Link>

                        <Link href="#referenciaAprofunde">
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
                
                    <TextoModelo id="referenciaPratique">
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
                    
                    <TextoModelo id="referenciaAprofunde">
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
                    
                    <TextoModelo>
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
                    
                    <PesquisaModelo id='Sobre o aprendizado'>
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
                    
                    <PesquisaModelo id='PBL'>
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
                        
                        <h3><Azul>2.</Azul> Pesquise e Planeje:</h3>

                        <Paragrafo2>
                            Antes de mergulhar nos módulos desta trilha, dedique-se a compreender profundamente o problema escolhido e seus 
                            objetivos. O primeiro passo é pesquisar sobre o tema, buscando informações em fontes confiáveis e analisando as 
                            soluções que já estão sendo desenvolvidas ao redor do mundo. 
                            Reflita sobre como essas ideias podem ser aprimoradas ou adaptadas. 
                        </Paragrafo2>

                        <Paragrafo2>
                            Pergunte-se para guiar sua investigação:
                        </Paragrafo2>

                        <ul>
                            <li>O que é lixo espacial, e por que ele representa um risco significativo?</li>

                            <li>Quais tecnologias estão disponíveis atualmente para lidar com esse problema, e como elas funcionam?</li>
                            
                            <li>De que forma a engenharia aeroespacial pode contribuir para a mitigação de desafios globais?</li>
                        </ul>

                        <Paragrafo2>
                            Além disso, explore as informações disponíveis em artigos e entrevistas. 
                            Aqui estão alguns exemplos relevantes:
                        </Paragrafo2>

                        <ul>
                            <li>“Ismael López: Hay más de un millón de desechos espaciales en órbita” – O CEO da Thales Alenia Space 
                                na Espanha discute os desafios da indústria espacial e as novas missões. <Referencia target='black' href="https://as.com/actualidad/ciencia/ismael-lopez-hay-mas-de-un-millon-de-desechos-espaciales-en-orbita-n/?utm_source=chatgpt.com">Leia mais aqui</Referencia> </li>

                            <li>“Cientistas Criam Sistema a Laser para Combater o Lixo Espacial” – Um estudo sobre tecnologias
                                 de laser para desintegrar fragmentos de lixo espacial. <Referencia target='black' href='https://olhardigital.com.br/2023/10/06/ciencia-e-espaco/cientistas-criam-sistema-a-laser-para-combater-o-lixo-espacial/?utm_source=chatgpt.com'>Leia mais aqui</Referencia></li>
                            
                            <li>“Japão e Índia Estudam Satélite Equipado com Laser” – Iniciativa internacional 
                                para o desenvolvimento de satélites com tecnologia de 
                                laser para reduzir o lixo espacial. <Referencia href="https://www.terra.com.br/byte/japao-e-india-estudam-satelite-equipado-com-laser-para-reduzir-lixo-espacial%2C5b1e1a090a624d358722c36b2a65fdeay5t81aqu.html?utm_source=chatgpt.com" targe="black">Leia mais aqui</Referencia>
                            </li>
                        </ul>        
                        
                        <h3><Azul>3.</Azul> Desenvolva Soluções:</h3> 

                        <Paragrafo2>
                            Após explorar os módulos seguintes e consolidar os conceitos estudados, é hora de colocar o aprendizado em prática.
                            Utilize os conhecimentos adquiridos para desenvolver soluções inovadoras e viáveis, como:    
                        </Paragrafo2>

                        <ul>
                            <li><Azul>Prototipar</Azul> um satélite equipado com tecnologia de laser capaz de desintegrar detritos menores com precisão e eficiência.</li>

                            <li><Azul>Simular intervenções orbitais</Azul> para alterar a trajetória de fragmentos maiores, reduzindo o 
                                risco de colisões e a formação de novos detritos.</li>
                            
                            <li><Azul>Planejar algoritmos avançados</Azul> que permitam o monitoramento contínuo de áreas congestionadas
                                 e a realização de manutenções autônomas e inteligentes.</li>
                        </ul>

                        <Paragrafo2>
                            Essa etapa é essencial para transformar teoria em prática, incentivando o 
                            uso de ferramentas e metodologias que promovem a resolução de problemas reais
                            de forma criativa e eficiente.
                        </Paragrafo2>
                        <Paragrafo2>
                            O PBL é uma ferramenta eficaz para tornar o aprendizado dinâmico, relevante e diretamente 
                            aplicável a problemas reais. Ele não apenas ensina conceitos teóricos, mas também proporciona 
                            uma vivência prática, permitindo ao estudante experimentar a atuação profissional na engenharia.
                            Embora o PBL seja altamente eficaz tanto para a preparação inicial (escolha e estudo do desafio) 
                            quanto para a aplicação prática (desenvolvimento de soluções), é importante complementar essa abordagem 
                            com métodos de aprendizagem que otimizem o estudo dos módulos subsequentes. Estes módulos oferecem uma 
                            rica diversidade de conteúdo, incluindo vídeos, artigos, livros referenciados e novos conceitos.  
                            Para apoiar essa jornada, recomendamos quatro outros métodos de aprendizagem que podem ser aplicados ao
                            longo do estudo dos próximos módulos. Esses métodos ajudarão a absorver, organizar e consolidar as informações de 
                            forma mais eficiente e estruturada, são eles: o Método de Feynman, o Método de Repetição Espaçada, o Método de 
                            Estudo Ativo e Resolução de Problemas e o Método Pomodoro.
                        </Paragrafo2>  

                    </PesquisaModelo>

                    <PesquisaModelo id='Feynman'>
                        <h2>Método <Azul>Feynman</Azul></h2>
                        <Paragrafo2> 
                            Este método envolve tentar ensinar o conteúdo que você aprendeu de forma simples,
                            como se estivesse explicando para uma pessoa leiga. Ele se baseia no princípio de
                            que, ao tentar ensinar um conceito de forma clara e acessível, é possível identificar
                            rapidamente lacunas no seu entendimento. Essa prática transforma o estudo em uma experiência
                            ativa e reflexiva.
                        </Paragrafo2>

                        <h2><Azul>Como usar?</Azul></h2>

                        <Paragrafo2>
                            Após estudar um conceito ou tópico de engenharia, tente explicar o que você aprendeu de
                            maneira clara e simples. Se encontrar dificuldades, retorne ao conteúdo e estude novamente
                            até ser capaz de explicá-lo de forma concisa.
                        </Paragrafo2>

                        <h2><Azul>Benefícios:</Azul></h2>

                        <Paragrafo2>
                            Identificação de lacunas no conhecimento, melhor compreensão e retenção dos conceitos.
                        </Paragrafo2>

                        <h2><Azul>Saiba mais:</Azul></h2>

                        <Paragrafo2>
                            Para aprofundar seu entendimento sobre o Método de Feynman, recomendo o vídeo 
                            "The Feynman Technique", disponível no site Aprendendo Inglês. Embora o conteúdo 
                            esteja em inglês, o site oferece recursos que podem auxiliar na compreensão. 
                            Você pode assisti-lo através do link abaixo: 
                            <br />
                            <Referencia href="https://www.aprendendoingles.com.br/2021/10/17/video-the-feynman-technique/?utm_source=chatgpt.com" targe="black">The Feynman Technique - Aprendendo Inglês</Referencia>
                            <br />
                            Para acessar vídeo em português sobre a Técnica de Feynman, você pode assistir ao seguinte vídeo no YouTube:
                            <br />
                            <Referencia href="https://www.aprendendoingles.com.br/2021/10/17/video-the-feynman-technique/?utm_source=chatgpt.com" targe="black">Técnica de Feynman para Aprender Melhor</Referencia>
                        </Paragrafo2>

                        <Paragrafo></Paragrafo>
                    </PesquisaModelo>  
                </Textos>
            </Main>
        </div>
    )
}

export default Aprendendo;