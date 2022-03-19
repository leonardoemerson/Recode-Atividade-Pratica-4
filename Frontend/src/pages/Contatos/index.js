import React from "react";
import './style.css';
import Introducao from "./components/Introducao";
import Contatos from "./components/Contatos";

function Contato(){
    return(
        <div>
            <Introducao />
            <Contatos />
        </div>
    );
}

export default Contato;