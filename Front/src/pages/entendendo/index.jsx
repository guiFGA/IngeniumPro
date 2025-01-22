import logo from '../../assets/imagens/logo.svg'
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Textos, Referencia} from './entendendo';

function Entendendo(){
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
                            Entendendo <br /><Azul> o Problema</Azul>
                        </Titulo>

                        <Linha></Linha>
                    </Topo>
                    <Textos>
                        <p>
                            <Azul>Desafio Global:</Azul> Gerenciamento dos Detritos Espaciais
                            O espaço ao redor da Terra está ficando cada vez mais congestionado. 
                            Satélites desativados, pedaços de foguetes e outros resíduos de missões
                            anteriores formam um perigoso cinturão de detritos conhecido como "lixo 
                            espacial". Esses fragmentos, mesmo pequenos, representam um risco 
                            significativo para satélites ativos, missões tripuladas e futuras 
                            iniciativas espaciais. O gerenciamento eficaz desse desafio é uma das 
                            maiores prioridades na engenharia aeroespacial contemporânea.
                        </p>
                        <h3><Azul>Inovação que propomos</Azul></h3>
                        <p>
                            Imaginamos um futuro onde satélites autônomos com tecnologia avançada de propulsão a 
                            laser são a chave para enfrentar esse problema. Esses dispositivos seriam projetados 
                            para desempenhar funções específicas:
                        </p>

                        <ul>
                            <li>
                                <Azul>Desintegração de pequenos detritos</Azul><br />Utilizando feixes de laser de 
                                alta precisão, esses satélites poderiam vaporizar fragmentos menores ou reduzir sua 
                                velocidade, promovendo sua reentrada segura na atmosfera terrestre, onde seriam 
                                incinerados.
                            </li>
                            <li>
                                <Azul>Desvio de detritos maiores</Azul><br />
                                Com pequenos impulsos calculados, 
                                esses satélites poderiam alterar a 
                                trajetória de fragmentos maiores, evitando 
                                colisões que poderiam gerar ainda mais lixo 
                                espacial.
                            </li>
                            <li>
                                <Azul>Manutenção contínua e inteligente</Azul><br />
                                Operando de forma autônoma e com algoritmos 
                                inteligentes, os satélites seriam capazes de monitorar 
                                áreas congestionadas em tempo real, planejando e executando 
                                intervenções com eficiência e precisão.
                            </li>
                        </ul>

                        <h3><Azul>Por Que Isso Importa?</Azul></h3>

                        <p>
                            Além de proteger tecnologias essenciais para a nossa vida diária, 
                            como telecomunicações, GPS e monitoramento climático, o gerenciamento 
                            eficaz dos detritos espaciais é crucial para garantir a sustentabilidade 
                            de futuras explorações espaciais. Sem uma solução inovadora, o aumento 
                            exponencial desses resíduos pode levar a um cenário conhecido como 
                            Síndrome de Kessler, onde colisões em cadeia tornam algumas órbitas 
                            inutilizáveis por décadas.
                            Acreditamos que é possível transformar esse desafio em uma oportunidade 
                            para revolucionar a maneira como interagimos com o espaço, garantindo um 
                            futuro mais seguro e sustentável para todos.
                        </p>


                        <h3><Azul>Saiba Mais</Azul></h3>
                        <p>
                            Para quem deseja aprofundar o conhecimento sobre o 
                            gerenciamento de detritos espaciais e os desafios 
                            associados, existem diversos recursos disponíveis:
                        </p>

                        <ul>
                            <li>
                                <Azul>NASA:</Azul> A agência espacial norte-americana mantém uma página dedicada 
                                ao tema, com uma vasta coleção de bibliografias, estudos e relatórios 
                                técnicos que abordam os riscos e soluções relacionados ao lixo 
                                espacial. Confira mais em <Referencia target="black" href="https://www.nasa.gov/headquarters/library/find/bibliographies/space-debris/">
                                Recursos sobre Detritos Espaciais – NASA.
                                </Referencia>
                            </li>
                            <li>
                                <Azul>Agência Espacial Europeia (ESA):</Azul><br /> Reconhecida por suas iniciativas 
                                na área de segurança espacial, a ESA oferece informações detalhadas sobre 
                                monitoramento, mitigação e prevenção de detritos espaciais, destacando sua 
                                importância no cenário internacional. Saiba mais em <Referencia href="https://www.esa.int/Space_Safety/Space_Debris">
                                Detritos Espaciais – ESA.</Referencia>
                            </li>
                            <li>
                                <Azul>Journal of Space Safety Engineering:</Azul> Este periódico 
                                científico publica artigos especializados sobre segurança 
                                espacial, abordando tópicos como os riscos de colisões e o 
                                efeito Kessler. É uma excelente fonte para estudantes e 
                                profissionais que desejam explorar os aspectos técnicos e 
                                científicos do tema. Acesse em <Referencia  target="black" href="https://www.iaass.org/publications/journal-of-space-safety-engineering/">
                                Journal of Space SafetyEngineering.</Referencia>
                            </li>
                        </ul>

                        <p>
                            Explore esses materiais e se aprofunde no fascinante desafio de tornar 
                            o espaço um ambiente mais seguro e sustentável!
                        </p>

                    </Textos>
                </Caixa>
            </Main>
        </div>
    )    
}

export default Entendendo;