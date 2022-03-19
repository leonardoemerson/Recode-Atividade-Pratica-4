import React, {useState, useEffect} from 'react';
import {Link, useHistory, useParams } from 'react-router-dom';
import AgenciaService from '../services/AgenciaService';

const AddAgenciaComponent = () => {

    const [cnpj, setCnpj] = useState('')
    const [endereco, setEndereco] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const history = useHistory();
    const {idAgencia} = useParams();

    const saveOrUpdateAgencia = (e) => {
        e.preventDefault();

        const agencia = {cnpj, endereco, telefone, email}

        if(idAgencia){
            AgenciaService.updateAgencia(idAgencia, agencia).then((response) => {
                history.push('/agencias')
            }).catch(error => {
                console.log(error)
            })

        }else{
            AgenciaService.createAgencia(agencia).then((response) =>{
                console.log(response.data)
                history.push('/agencias')
            }).catch(Error =>{
                console.log(Error)
            })
        } 
    }

    useEffect(() => {

        AgenciaService.getAgenciaById(idAgencia).then((response) =>{
            setCnpj(response.data.cnpj)
            setEndereco(response.data.endereco)
            setTelefone(response.data.telefone)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(idAgencia){
            return <h2 className = "text-center">Atualizar Agencia</h2>
        }else{
            return <h2 className = "text-center">Cadastrar Agencia</h2>
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
                                    <label className = "form-label"> CNPJ :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o CNPJ do agencia"
                                        name = "cnpj"
                                        className = "form-control"
                                        value = {cnpj}
                                        onChange = {(e) => setCnpj(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Endereço :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Digite o nome do agencia"
                                        name = "endereco"
                                        className = "form-control"
                                        value = {endereco}
                                        onChange = {(e) => setEndereco(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Telefone :</label>
                                    <input
                                        type = "value"
                                        placeholder = "Digite o telefone da agencia"
                                        name = "telefone"
                                        className = "form-control"
                                        value = {telefone}
                                        onChange = {(e) => setTelefone(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Digite o RG do agencia"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateAgencia(e)} >Salvar </button>
                                <Link to="/agencias" className="btn btn-danger"> Cancelar </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
        </div>
    )
}

export default AddAgenciaComponent;