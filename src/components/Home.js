import "./Home.css";
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function Home() {
    return(
        <section className='secaohome'>
            <img className="logo" src={"https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/10/logo_sus.png?fit=1200%2C620&ssl=1"} alt="logo"/>
            <div className='containerhome'>
                <div className='texthome'>
                    <h2 className="h2home"> SUS {'\n'} <span> SISTEMA ÚNICO DE SAÚDE</span></h2>
                    <p className="phome"> Selecione alguma opção para continuar.</p>

                </div>
        <div className="deletehome">
        <Link to="/delete">
            <button className="buttonhome">DELETAR USUARIO</button>
        </Link>
        <Link to="/put">
            <button className="buttonhome">ATUALIZAR USUÁRIO</button> 
        </Link>
        <Link to="/post">
            <button className="buttonhome">CADASTRAR USUÁRIO</button>
        </Link>
        <Link to="/Pessoas">
            <button className="buttonhome">VISUALIZAR TODOS OS USUÁRIOS</button>
        </Link>
        <Link to="/GetId">
            <button className="buttonhome">VISUALIZAR USUÁRIO ESPECÍFICO</button>
        </Link>
        
        </div>

            </div>
        </section>   
        
    )
}

export default Home;