import React, { useState } from 'react';
import axios from 'axios';
import "./Put.css";

function Put() {
    const [id, setId] = useState('');

    const [dados, setDados] = useState({
        givenName: '',
        gender: '',
        streetAddress: '',
        city: '',
        state: '',
        kilograms:'', 
        birthday:'',
        centimeters:'', 
        bloodType: '',
        latitude: '',
        longitude: '',
    });

    const NewPatch = event => {

        event.preventDefault();
        const pessoaId = parseInt(id); //numero inteiro
        axios.put(`http://inovia.eastus.cloudapp.azure.com/api/person/${pessoaId}`,dados)
            .then(response => {
                console.log(response.data);
                alert("USUÁRIO ATUALIZADO!");
            })
            .catch(error => {
                console.log(error);
            });
    }

        

    return (
       

        <div className="casa">

            <header class="headerss">
                <h3>Atualizar dados do usuário pelo ID</h3>
            </header>

            
                <div className='divzada'>
                <section className='secao'>
                    <form className='ave' onSubmit={NewPatch}>
                    <div className='formidiv'>
                        <label htmlFor="id">ID:</label>
                        <input class="doido "type="number" id="id" value={id} onChange={event => setId(event.target.value)} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="givenName">Nome:</label>
                        <input class="doido" type="text" id="givenName" value={dados.givenName} onChange={event => setDados({...dados, givenName: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="gender">Gênero:</label>
                        <input class="doido "type="text" id="gender" value={dados.gender} onChange={event => setDados({...dados, gender: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="streetAddress">Endereço:</label>
                        <input class="doido" type="text" id="streetAddress" value={dados.streetAddress} onChange={event => setDados({...dados, streetAddress: event.target.value})} />
                    </div >
                    <div className='formidiv'>
                        <label htmlFor="city">Cidade:</label>
                        <input class="doido" type="text" id="city" value={dados.city} onChange={event => setDados({...dados, city: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="state">Estado:</label>
                        <input class="doido" type="text" id="state" value={dados.state} onChange={event => setDados({...dados, state: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="kilograms">Peso:</label>
                        <input class="doido" type="text" id="kilograms" value={dados.kilograms} onChange={event => setDados({...dados, kilograms: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="birthday">Data de Aniversário:</label>
                        <input class="doido" type="text" id="birthday" value={dados.birthday} onChange={event => setDados({...dados, birthday: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="centimeters">Altura:</label>
                        <input class="doido" type="text" id="centimeters" value={dados.centimeters} onChange={event => setDados({...dados, centimeters: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="bloodType">Tipo Sanguineo:</label>
                        <input class="doido"type="text" id="bloodType" value={dados.bloodType} onChange={event => setDados({...dados, bloodType: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="latitude">Latitude:</label>
                        <input class="doido" type="text" id="latitude" value={dados.latitude} onChange={event => setDados({...dados, latitude: event.target.value})} />
                    </div>
                    <div className='formidiv'>
                        <label htmlFor="longitude">Longitude:</label>
                        <input class="doido" type="text" id="longitude" value={dados.longitude} onChange={event => setDados({...dados, longitude: event.target.value})} />
                    </div>
                    <h5>--------------</h5>
                    <div className='formidiv'>
                    <button class="slaeu" type="submit">Atualizar</button>
                    </div>
                    </form>
                </section>
                </div>
                
            
            
        </div>
    );
}

export default Put;