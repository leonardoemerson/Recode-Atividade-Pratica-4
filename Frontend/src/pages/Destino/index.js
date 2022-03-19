import React from "react";
import './style.css';
import Introducao from "./components/Introducao";
import Destinos from "./components/Destinos";

function Destino(){
    return(
        <div>
            <Introducao />
            <Destinos />
        </div>
        
    );
}

export default Destino;