import React from "react";
import './style.css';

function Contatos(){
    return(
        <div id="main">
            <table className="table table-dark">
            <thead>
                <tr>
                <th scope="col">Endereço</th>
                <th scope="col">Telefone</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Matriz - Av. Presidente Vargas, Rio de Janeiro - RJ / n°: 300</td>
                <td>(21) 99999-9999</td>
                <td>viajou1@viajou.com.br</td>
                </tr>
                <tr>
                <td>Filial - Av. Presidente Castelo Branco, Rio de Janeiro - RJ / n°: 311</td>
                <td>(21) 98888-8888</td>
                <td>viajou2@viajou.com.br</td>
                </tr>
                <tr> 
                <td>Filial - Av. Radial Oeste, Rio de Janeiro - RJ / n°: 323</td>
                <td>(21) 97777-7777</td>
                <td>viajou3@viajou.com.br</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default Contatos;