import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams } from 'react-router-dom';
import ClienteService from '../services/ClienteService';

const AddClienteComponent = () => {

    const [endereco, setEndereco] = useState('')
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [rg, setRg] = useState('')
    const history = useHistory();
    const {idCliente} = useParams();

    const saveOrUpdateCliente = (e) => {
        e.preventDefault();

        const cliente = {endereco, nome, cpf, rg}

        if(idCliente){
            ClienteService.updateCliente(idCliente, cliente).then((response) => {
                history.push('/clientes')
            }).catch(error => {
                console.log(error)
            })

        }else{
            ClienteService.createCliente(cliente).then((response) =>{
                console.log(response.data)
                history.push('/clientes')
            }).catch(Error =>{
                console.log(Error)
            })
        } 
    }

    useEffect(() => {

        ClienteService.getClienteById(idCliente).then((response) =>{
            setEndereco(response.data.endereco)
            setNome(response.data.nome)
            setCpf(response.data.cpf)
            setRg(response.data.rg)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(idCliente){
            return <h2 className = "text-center">Atualizar Cliente</h2>
        }else{
            return <h2 className = "text-center">Cadastrar Cliente</h2>
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
                                        placeholder = "Digite o endereço do cliente"
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
                                        placeholder = "Digite o nome do cliente"
                                        name = "nome"
                                        className = "form-control"
                                        value = {nome}
                                        onChange = {(e) => setNome(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> CPF :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o CPF do cliente"
                                        name = "cpf"
                                        className = "form-control"
                                        value = {cpf}
                                        onChange = {(e) => setCpf(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> RG :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o RG do cliente"
                                        name = "rg"
                                        className = "form-control"
                                        value = {rg}
                                        onChange = {(e) => setRg(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCliente(e)} >Salvar </button>
                                <Link to="/clientes" className="btn btn-danger"> Cancelar </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default AddClienteComponent;