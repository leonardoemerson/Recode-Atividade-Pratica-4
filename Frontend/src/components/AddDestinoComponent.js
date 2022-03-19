import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams } from 'react-router-dom';
import DestinoService from '../services/DestinoService';

const AddDestinoComponent = () => {

    const [endereco, setEndereco] = useState('')
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [qtdVagas, setQtdVagas] = useState('')
    const history = useHistory();
    const {idDestino} = useParams();

    const saveOrUpdateDestino = (e) => {
        e.preventDefault();

        const destino = {endereco, nome, preco, qtdVagas}

        if(idDestino){
            DestinoService.updateDestino(idDestino, destino).then((response) => {
                history.push('/destinos')
            }).catch(error => {
                console.log(error)
            })

        }else{
            DestinoService.createDestino(destino).then((response) =>{
                console.log(response.data)
                history.push('/destinos')
            }).catch(Error =>{
                console.log(Error)
            })
        } 
    }

    useEffect(() => {

        DestinoService.getDestinoById(idDestino).then((response) =>{
            setEndereco(response.data.endereco)
            setNome(response.data.nome)
            setPreco(response.data.preco)
            setQtdVagas(response.data.qtdVagas)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(idDestino){
            return <h2 className = "text-center">Atualizar Destino</h2>
        }else{
            return <h2 className = "text-center">Cadastrar Destino</h2>
        }
    }

    return (
        <div>
            <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                           title()
                        }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Endereço :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Digite o endereço do destino"
                                        name = "endereco"
                                        className = "form-control"
                                        value = {endereco}
                                        onChange = {(e) => setEndereco(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Nome :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Digite o nome do destino"
                                        name = "nome"
                                        className = "form-control"
                                        value = {nome}
                                        onChange = {(e) => setNome(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Preço :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o preço do destino"
                                        name = "preco"
                                        className = "form-control"
                                        value = {preco}
                                        onChange = {(e) => setPreco(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Quantidade de vagas :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o quantidade de vagas do destino"
                                        name = "qtdVagas"
                                        className = "form-control"
                                        value = {qtdVagas}
                                        onChange = {(e) => setQtdVagas(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateDestino(e)} >Salvar </button>
                                <Link to="/destinos" className="btn btn-danger"> Cancelar </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default AddDestinoComponent;