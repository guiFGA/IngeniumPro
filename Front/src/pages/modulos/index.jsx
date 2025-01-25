import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { Nav, NavBar, NavLinks, Caixa, Main, Topo, Azul, Titulo, Linha, Baixo, Click, Bolinha, Link} from './modulos';

function Modulos() {

    const style = {
        color: "white"
    }

    const { id } = useParams()
    const [titulo, SetTitulo] = useState('')
    const [conteudo, SetConteudo] = useState('')
    const [clicked, setClicked] = useState(false);

    const token = sessionStorage.getItem("authToken")
    const decodede = JSON.parse(token);

    console.log('token recebido' + decodede)

    //mudar o estado do botao
    const handleClick = () => {
        if(clicked==false){
        setClicked(true);
        }

        else
        setClicked(false)
      };

    //rota para identificar qual é o modulo
    function requisitar(id) {
        api
            .post('/requisitar', { id }, {
                headers: {
                    
                    'Authorization': decodede.data
                    },
                }
            )

            .then((modulo) => {

                SetTitulo(modulo.data.title)
                SetConteudo(modulo.data.content)

            })

            .catch(err => {
                // Exibindo a mensagem de erro retornada pela API, caso ocorra um erro (vem pelo campo error do json)
                if (err.response.data.error) {
                    alert(err.response.data.error); // Exibe a mensagem de erro
                } else {
                    alert('Erro inesperado! Tente novamente mais tarde.'); // Erro genérico
                }
            });
    }

    useEffect(() => {

        requisitar(id); // Chamada quando o componente é montado

    }, []); // O array vazio [] garante que só será chamado uma vez


    //função para marcar como concluido

    function marcar(id){
        api
        .post('/marcar', { id },{
            headers: {
                    
            'Authorization': decodede.data
            },
        })

        .then((response) => {
            alert(response.data)
        })

        .catch(err => {
            // Exibindo a mensagem de erro retornada pela API, caso ocorra um erro (vem pelo campo error do json)
            if (err.response.data.error) {
                alert(err.response.data.error); // Exibe a mensagem de erro
            } else {
                alert('Erro inesperado! Tente novamente mais tarde.'); // Erro genérico
            }
        });

    }

    //disparar função
    const handleSubmit = (e) =>{
        e.preventDefault();
        marcar(id)
    }


    return (

        <div style={style}>
            <h1>teste de modulo id {id}</h1>
            <h1>{titulo}</h1>
            <p>{conteudo}</p>
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
                            Módulo 0 <br /><Azul>Introdução</Azul>
                        </Titulo>

                        <Linha></Linha>
                    </Topo>
                    <p>
                        Aprender é uma habilidade que nos acompanha por toda a vida. 
                        No entanto, muitas vezes nos dedicamos aos estudos sem conhecer 
                        as melhores estratégias para aproveitar ao máximo nosso potencial. 
                        O módulo "Aprendendo a Aprender" foi criado para ajudá-lo a explorar 
                        métodos de aprendizagem variados, desde técnicas de memorização até a 
                        gestão eficaz do tempo e a aplicação de ferramentas modernas de estudo.  
                    </p>

                    <Baixo>
                        <Link href="http://localhost:5173/aprendendoaaprender">
                            <Click>
                                <Bolinha><p>1</p></Bolinha>
                                <p>Aprendendo a Aprender</p>
                            </Click>
                        </Link>
                            
                        <Link href="http://localhost:5173/entendendooproblema">
                            <Click>
                                <Bolinha><p>2</p></Bolinha>
                                <p>Entendendo o Problema</p>
                            </Click>
                        </Link>
                    </Baixo>
                </Caixa>
            </Main>
            <form onSubmit={handleSubmit}>
                <button type="submit" onClick={handleClick} >{clicked ? "Marcar como concluido" : "Desmarcar"}</button>
            </form>
        </div>



    )
}

export default Modulos