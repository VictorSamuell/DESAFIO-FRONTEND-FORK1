import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {Table} from "react-bootstrap";
import "./GetId.css";
//lembrete toFixed(2) pra casas decimais


function GetId() {

    const [id, setId] = useState('');
    const [data , setData] = useState('');
    

    const getID = event => {
        event.preventDefault();
        
        const userId = parseInt(id, 10);
        axios.get(`http://inovia.eastus.cloudapp.azure.com/api/person/${userId}`)
        .then(response => {
            setData(response.data);
            

        })
        .catch(error => {
            console.log(error);
        });
    };

    const imc = data.kilograms / ((data.centimeters/100) * (data.centimeters/100));
    

    return(

<div className='getiddiv'>

    <header className='mbappe'>   
    <h1> Insira o ID do usuário que deseja visualizar! </h1>
    </header>
    <div className='getiddiv2'>
    <section className='secaogetid'>

        <form className='vinjr' onSubmit={getID}>
            <div className='getiddiv3'>
            <h5>ID do usuário que deseja achar?</h5>
                <label htmlFor="id"></label>
                <input class="hexa" type="number" id="id" value={id} onChange={event => setId(event.target.value)} />
            </div>
            <button class="butas" type="submit">Pega la</button>
                     
            
        </form>

</section>
        <h2> Nome : {data.givenName} </h2>
        <h2> Genero : {data.gender} </h2>
        <h2> Endereço : {data.streetAddress} </h2>
        <h2> Cidade : {data.city}</h2>
        <h2> Estado : {data.state}</h2>
        <h2> Peso : {data.kilograms} kg</h2>
        <h2> Aniversário : {data.birthday}</h2>
        <h2> Altura : {data.centimeters} cm</h2>
        <h2> Tipo Sanguineo : {data.bloodType}</h2>
        <h2> Latitude : {data.latitude}</h2>
        <h2> Longitude : {data.longitude}</h2>
        <h2> IMC : {imc.toFixed(2)}</h2>

    </div>
</div>


    )

}

export default GetId;