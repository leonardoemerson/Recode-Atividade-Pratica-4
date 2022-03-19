import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListaDestinoComponente from './components/ListaDestinoComponente';
import AddDestinoComponent from './components/AddDestinoComponent';
import ListaClienteComponente from './components/ListaClienteComponente';
import AddClienteComponent from './components/AddClienteComponent';
import ListaAgenciaComponente from './components/ListaAgenciaComponente';
import AddAgenciaComponent from './components/AddAgenciaComponent';
import Home from "./pages/Home";
import Contato from "./pages/Contatos";
import Footer from './components/Footer';
import Header from './components/Header';
import Catalogo from '../src/pages/Destino';
import Promocao from '../src/pages/Promocao';
import Login from '../src/pages/Login';
import Cadastro from '../src/pages/Cadastro';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <div className='container'>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path = "/destinos" component={ListaDestinoComponente}></Route>
            <Route path = "/add-destino" component={AddDestinoComponent}></Route>
            <Route path = "/edit-destino/:idDestino" component={AddDestinoComponent}></Route>
            <Route path = "/clientes" component={ListaClienteComponente}></Route>
            <Route path = "/add-cliente" component={AddClienteComponent}></Route>
            <Route path = "/edit-cliente/:idCliente" component={AddClienteComponent}></Route>
            <Route path = "/agencias" component={ListaAgenciaComponente}></Route>
            <Route path = "/add-agencia" component={AddAgenciaComponent}></Route>
            <Route path = "/edit-agencia/:idAgencia" component={AddAgenciaComponent}></Route>
            <Route path = "/contatos" component={Contato}></Route>
            <Route path = "/catalogo" component={Catalogo}></Route>
            <Route path = "/login" component={Login}></Route>
            <Route path = "/cadastro" component={Cadastro}></Route>
            <Route path = "/promocao" component={Promocao}></Route>
          </Switch>
        </div>
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
