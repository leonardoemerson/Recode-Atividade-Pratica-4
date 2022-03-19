import React, { useEffect, useState } from 'react'
import DestinoService from '../services/DestinoService'
import { Link } from 'react-router-dom'
import { Button } from 'bootstrap'

const ListaDestinoComponente = () => {
    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        DestinoService.getAllDestinos().then((Response) =>{
            setDestinos(Response.data)
            console.log(Response.data);

        }).catch(Error => {
            console.log(Error);
        })

    }, [])

    const getAllDestinos = () => {
        DestinoService.getAllDestinos().then((response) => {
            setDestinos(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteDestino = (idDestino) => {
         DestinoService.deleteDestino(idDestino).then((response) =>{
         getAllDestinos();
        }).catch(error =>{
            console.log(error);
        })
         
     }

  return (
    <div className='container'>
        <br/>
        <h2 className='text-center'>Lista de Destinos</h2>
        <Link to="/add-destino" className="btn btn-primary mb-2">Adicionar Destino</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Destino Id</th>
                <th>Endereço</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade de Vagas</th>
                <th>Ações</th>
            </thead>
            <tbody>
                {
                    destinos.map(
                        destino =>
                        <tr key={destino.idDestino}>
                            <td>{destino.idDestino}</td>
                            <td>{destino.endereco}</td>
                            <td>{destino.nome}</td>
                            <td>{destino.preco}</td>
                            <td>{destino.qtdVagas}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-destino/${destino.idDestino}`}>Atualizar</Link>
                                <button className="btn btn-danger" onClick={()=>deleteDestino(destino.idDestino)} style = {{marginLeft:"10px"}}>Deletar</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListaDestinoComponente