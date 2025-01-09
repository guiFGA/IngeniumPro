import { useState, useEffect } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

function Modulos() {

    const style = {
        color: "white"
    }

    const { id } = useParams()
    const [titulo, SetTitulo] = useState('')
    const [conteudo, SetConteudo] = useState('')
    const [clicked, setClicked] = useState(false);

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
            .post('/requisitar', { id })

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
        .post('/marcar', { id })

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

            <form onSubmit={handleSubmit}>
                <button type="submit" onClick={handleClick} >{clicked ? "Marcar como concluido" : "Desmarcar"}</button>
            </form>
        </div>



    )
}

export default Modulos