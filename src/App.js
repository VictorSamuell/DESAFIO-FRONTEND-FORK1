import Home from './components/Home';
import Sobre from './components/Sobre';
import Pessoas from './components/Pessoas';
import Delete from './components/Delete';
import Put from './components/Put';
import Post from './components/Post';
import GetId from './components/GetId';
import Imc from './components/Imc';
import Search from './components/Search';
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>

      <Nav type="teste "variant="tabs">
        <h4 id="saude">SUS</h4>
        
        <Nav.Link as={Link} to="/"> Pagina Inicial</Nav.Link>
        <Nav.Link as={Link} to="/pessoas"> Usuários Cadastrados</Nav.Link>
        
        <Nav.Link as={Link} to="/delete">Deletar Usuário</Nav.Link>
        <Nav.Link as={Link} to="/put">Atualizar Usuário</Nav.Link>
        <Nav.Link as={Link} to="/post">Cadastrar Usuário</Nav.Link>
        <Nav.Link as={Link} to="/getid">Procura Usuário pelo Id</Nav.Link>
        <Nav.Link as={Link} to="/imc"> Calculadora de IMC </Nav.Link>
        <Nav.Link as={Link} to="/sobre"> Sobre</Nav.Link>
      </Nav>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/pessoas" element={<Pessoas/>}></Route>
        <Route path="/delete" element={<Delete/>}></Route>
        <Route path="/put" element={<Put/>}></Route>
        <Route path="/post" element={<Post/>}></Route>
        <Route path="/getid" element={<GetId/>}></Route>
        <Route path="/imc" element={<Imc/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
