import React from "react";
import "./style.css";

function Cadastro(){
    return(
        <div>
          <div class="flex-container">
          <div class="content-container">
            <div class="form-container">
              <form action="">
                <h3>
                  Cadastro
                </h3>
                <br/>
                <span class="subtitle">Login:</span>
                <br/>
                <input type="text" name="username" value=""/>
                <br/>
                <span class="subtitle">Senha:</span>
                <br/>
                <input type="password" name="password" value=""/>
                <br/>
                <span class="subtitle">Confirme sua senha:</span>
                <br/>
                <input type="password" name="password" value=""/>
                <br/><br/>
                <input type="submit" value="Cadastrar" class="submit-btn"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cadastro;