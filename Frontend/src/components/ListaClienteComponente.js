import React, { useEffect, useState } from 'react'
import ClienteService from '../services/ClienteService'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'

const ListaClienteComponente = () => {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        ClienteService.getAllClientes().then((Response) =>{
            setClientes(Response.data)
            console.log(Response.data);

        }).catch(Error => {
            console.log(Error);
        })

    }, [])

    const getAllClientes = () => {
        ClienteService.getAllClientes().then((response) => {
            setClientes(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteCliente = (idCliente) => {
         ClienteService.deleteCliente(idCliente).then((response) =>{
         getAllClientes();
        }).catch(error =>{
            console.log(error);
        })
         
     }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>Lista de Clientes</h2>
        <Link to="/add-cliente" className="btn btn-primary mb-2">Adicionar Cliente</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Cliente Id</th>
                <th>Endereço</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {
                    clientes.map(
                        cliente =>
                        <tr key={cliente.idCliente}>
                            <td>{cliente.idCliente}</td>
                            <td>{cliente.endereco}</td>
                            <td>{cliente.nome}</td>
                            <td>{cliente.cpf}</td>
                            <td>{cliente.rg}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-cliente/${cliente.idCliente}`}>Atualizar</Link>
                                <button className="btn btn-danger" onClick={()=>deleteCliente(cliente.idCliente)} style = {{marginLeft:"10px"}}>Deletar</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaClienteComponente