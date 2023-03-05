import React, { useState } from 'react';
import axios from 'axios';
import "./Delete.css";

function Delete() {
    const [id, setId] = useState('');

    const Remove = event => {
        event.preventDefault();
        const userId = parseInt(id, 10);
        axios.delete(`http://inovia.eastus.cloudapp.azure.com/api/person/${userId}`)
        .then(response => {
            console.log(response.data);
            alert("USUÁRIO REMOVIDO!");
        })
        .catch(error => {
            console.log(error);
        });
    };

    return (
        <div className="home">
            <header className='mano'>
                <h3> Deletar dados do usuário pelo ID</h3>
            </header>
            <div className="container">
                <section className='secao2'>

                        <form className='credo' onSubmit={Remove}>
                            <div className='formidiv2'>
                                <h5>ID do usuário que será excluído</h5>
                        <label htmlFor="id"></label>
                        <input class="maluco" type="number" id="id" value={id} onChange={event => setId(event.target.value)} />
                            </div>
                            <h3>------------</h3>
                                    <button class="butas" type="submit">Excluir</button>
                        </form>

                </section>
            </div>
        </div>
    );
}

export default Delete;