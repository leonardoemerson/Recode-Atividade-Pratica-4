import React, { useEffect, useState } from 'react'
import AgenciaService from '../services/AgenciaService'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'

const ListaAgenciaComponente = () => {
    const [agencias, setAgencias] = useState([])

    useEffect(() => {
        AgenciaService.getAllAgencias().then((Response) =>{
            setAgencias(Response.data)
            console.log(Response.data);

        }).catch(Error => {
            console.log(Error);
        })

    }, [])

    const getAllAgencias = () => {
        AgenciaService.getAllAgencias().then((response) => {
            setAgencias(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteAgencia = (idAgencia) => {
         AgenciaService.deleteAgencia(idAgencia).then((response) =>{
         getAllAgencias();
        }).catch(error =>{
            console.log(error);
        })
         
     }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>Lista de Agências</h2>
        <Link to="/add-agencia" className="btn btn-primary mb-2">Adicionar Agência</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Agencia Id</th>
                <th>CNPJ</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {
                    agencias.map(
                        agencia =>
                        <tr key={agencia.idAgencia}>
                            <td>{agencia.idAgencia}</td>
                            <td>{agencia.cnpj}</td>
                            <td>{agencia.endereco}</td>
                            <td>{agencia.telefone}</td>
                            <td>{agencia.email}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-agencia/${agencia.idAgencia}`}>Atualizar</Link>
                                <button className="btn btn-danger" onClick={()=>deleteAgencia(agencia.idAgencia)} style = {{marginLeft:"10px"}}>Deletar</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaAgenciaComponente