import React, { useState } from 'react';
import axios from 'axios';
import "./Post.css";

function Post() {
    const [id, setId] = useState('');
    const [givenName, setgivenName] = useState('')
    const [gender, setGender] = useState('')
    const [streetAddress , setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [kilograms,setKilograms] = useState('')
    const [birthday, setBirthday] = useState('')
    const [centimeters, setCentimeters] = useState('')
    const [bloodType, setBloodType] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    
    
    const addPost = event => {
        event.preventDefault();
        const post = {
            givenName: givenName,
            gender: gender,
            streetAddress: streetAddress,
            city: city,
            state: state,
            kilograms:kilograms, 
            birthday:birthday,
            centimeters:centimeters, 
            bloodType: bloodType,
            latitude: latitude,
            longitude: longitude
        };

            axios.post('http://inovia.eastus.cloudapp.azure.com/api/person',post)

            .then(response => {
                console.log(response.data);
                alert("usuario cadastrado")
            })
            .catch(error => {
                console.log(error);
            });
        
    };

    return (
        <div className='ramenez'>
            <div className='lacoupe'>
                <header className='ala'>
                    <h1 className='mansion'>Insira os dados do usuário que deseja Cadastrar </h1>
                </header>


                <div className='quepaola'>
                <section className='paola'>
                <form className='apaola' onSubmit={addPost}>

                    <div className='divas'>
                        <label htmlfor="givenName"> Nombre :</label>
                        <input class="insano" type="text" id="givenName" value={givenName} onChange={event => setgivenName(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="gender">Gênero:</label>
                        <input class="insano" type="text" id="gender" value={gender} onChange={event => setGender(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="streetAddress">Endereço:</label>
                        <input class="insano" type="text" id="streetAddress" value={streetAddress} onChange={event => setStreetAddress(event.target.value)} />
                    </div >

                    <div className='divas'>
                        <label htmlFor="city">Cidade:</label>
                        <input class="insano" type="text" id="city" value={city} onChange={event => setCity(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="state">Estado:</label>
                        <input class="insano" type="text" id="state" value={state} onChange={event => setState(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="kilograms">Peso:</label>
                        <input class="insano" type="text" id="kilograms" value={kilograms} onChange={event => setKilograms(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="birthday">Data de Nascimento:</label>
                        <input class="insano" type="text" id="birthday" value={birthday} onChange={event => setBirthday(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="centimeters">Altura:</label>
                        <input class="insano" type="text" id="centimeters" value={centimeters} onChange={event => setCentimeters(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="bloodType">Tipo Sanguineo:</label>
                        <input class="insano"type="text" id="bloodType" value={bloodType} onChange={event => setBloodType(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="latitude">Latitude:</label>
                        <input class="insano" type="text" id="latitude" value={latitude} onChange={event => setLatitude(event.target.value)} />
                    </div>

                    <div className='divas'>
                        <label htmlFor="longitude">Longitude:</label>
                        <input class="insano" type="text" id="longitude" value={longitude} onChange={event => setLongitude(event.target.value)} />
                    </div>

                    <h5>--------------</h5>
                    <div className='divas'>
                    <input class="botas" type="submit" value="Submit"></input>
                    </div>
                </form>
                </section>
                </div>
                

                
            </div>
        </div>
    )

    
    
};

export default Post;