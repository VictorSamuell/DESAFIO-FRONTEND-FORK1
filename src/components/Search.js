/*

TENTATIVA DE SEARCH


import React, { useState , useEffect } from 'react';
import axios from 'axios';
import './Search.css';

function Search () {
  
    state = {
        givenName: '',
        gender: '',
        streetAddress:'',
        city:'',
        state:'',
        birthday:'',
        bloodType:'',
        kilograms:'',
        centimeters:'',
        latitude:'',
        longitude:'',
        results: []
    };

    mudaInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    procuraPessoa = async () => {
        const { name, gender, address, city, state, age, bloodType, weight, height, latitude, longitude } = this.state;
        const response = await axios.get(`http://inovia.eastus.cloudapp.azure.com/api/person?name=${name}&gender=${gender}&address=${address}&city=${city}&state=${state}&age=${age}&bloodType=${bloodType}&weight=${weight}&height=${height}&latitude=${latitude}&longitude=${longitude}`);
        this.setState({ results: response.data });
      };  
      render (); {
        const { name, gender, address, city, state, age, bloodType, weight, height, latitude, longitude, results } = this.state;
      }

      return (

            <>
            
            <header className='headersearch'>
              <h1 className='h1search'> Procurar </h1>
            </header>
            <div>
            <div>
                <label htmlFor="givenName">Nome:</label>
                <input type="text" name="givenName" value={givenName} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="gender">Genero:</label>
                <select name="gender" value={gender} onChange={this.mudaInput}>
                <option value=""></option>
                <option value="male">male </option>
                <option value="female">female </option>
                </select>
            </div>
            <div>
                <label htmlFor="streetAddress">Endereço:</label>
                <input type="text" name="streetAddress" value={streetAddress} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="city">Cidade:</label>
                 <input type="text" name="city" value={city} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="state">Estado:</label>
                <input type="text" name="state" value={state} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="birthday">Data de Aniversário:</label>
                <input type="text" name="birthday" value={birthday} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="bloodType">Tipo Sanguineo:</label>
                <input type="text" name="bloodType" value={bloodType} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="kilograms">Peso:</label>
                <input type="text" name="kilograms" value={kilograms} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="centimeters">Altura:</label>
                <input type="text" name="centimeters" value={centimeters} onChange={this.mudaInput} />
             </div>
            <div>
                <label htmlFor="latitude">Latitude:</label>
                <input type="text" name="latitude" value={latitude} onChange={this.mudaInput} />
            </div>
            <div>
                <label htmlFor="longitude">Longitude:</label>
                <input type="text" name="longitude" value={longitude} onChange={this.mudaInput} />
            </div>
        <button onClick={this.Procura}>Search</button>
        {results.length > 0 && (
          <div>
            <h2>Results:</h2>
            <ul>
              {results.map((person, index) => (
                <li key={index}>
                  <p>Name: {person.givenName}</p>
                  <p>Gender: {person.gender}</p>
                  <p>Address: {person.streetAddress}</p>
                  <p>City: {person.city}</p>
                  <p>State: {person.state}</p>
                  <p>Age: {person.birthday}</p>
                  <p>Blood Type: {person.bloodType}</p>
                  <p>Weight: {person.kilograms}</p>
                  <p>Height: {person.centimeters}</p>
                  <p>Latitude: {person.latitude}</p>
                  <p>Longitude: {person.longitude}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>  
                    
              
        </>
      )       
              }       
      


export default Search
*/