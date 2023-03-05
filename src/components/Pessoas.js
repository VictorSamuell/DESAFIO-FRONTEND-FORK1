import React from "react";
import {useState, useEffect} from 'react';
import {Table , Form } from "react-bootstrap";
import {Button} from "react-bootstrap";
import axios from 'axios';
import "./Pessoas.css"
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';


//função get e botão para adicionar pessoa sem cadastro
//o botão para adicionar pessoas sem cadastro foi utilizado apenas para testes

function Pessoas() {


    const [posts, setPosts] = useState([]);
    const url ="http://inovia.eastus.cloudapp.azure.com/api/person";

    useEffect(() => {
        const getPosts = async () => {
            const {data: res} = await axios.get(url);
            setPosts(res);
        };
        getPosts();
    }, []);

    const calculateImc = () => {
        
    }
    return(
            <>
            <div className="divpessoas">

                
        
            
            <header className="headerpessoas">
            <h2 className="h2pessoas">
                EXISTEM {posts.length} PESSOAS CADASTRADAS.
            </h2>
            <h4 className="h4pessoas"> Deseja Cadastrar um Usuário? </h4> 
            
            <Link to="/post">
            <button className="buttonpessoas">CLIQUE AQUI</button> 
            </Link>
            
            </header>
            

            
            
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID:</th>
                        <th>Nome:</th>
                        <th>Gênero: </th>
                        <th>Endereço:</th>
                        <th>Cidade:</th>
                        <th>Estado:</th>
                        <th>Peso:</th>
                        <th>Idade:</th>
                        <th>Altura:</th>
                        <th>Tipo Sanguíneo:</th>
                        <th>Latitude:</th>
                        <th>Longitude:</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                    <tr key={post.id}>

                        

                        <td>{post.id}</td>
                        <td>{post.givenName}</td>
                        <td>{post.gender}</td>
                        <td>{post.streetAddress} </td>
                        <td>{post.city} </td>
                        <td>{post.state}</td>
                        <td>{post.kilograms} </td>
                        <td>{post.birthday} </td>
                        <td>{post.centimeters} </td>
                        <td>{post.bloodType} </td>
                        <td>{post.latitude} </td>
                        <td>{post.longitude} </td>
                        
                        </tr>
                        ))}

                </tbody>
            </Table>
            </div>
            </>
        )

        
    

}

    

export default Pessoas;

/*
<button onClick={addPost} className="btn btn-primary"> Add post</button>
const addPost = async () =>{
        const post = {
            givenName:'Pessoa', 
            body:'new'
        }
       await axios.post (url, post);
       setPosts([post, ...posts]);
    }


constructor(props){
        super(props);

        const [pessoa]

        this.state = {
            givenName:'',
            gender:'',
            streetAddress:'',
            city:'',
            kilograms:'',
            birthday:'',
            centimeters:'',
            bloodType:'',
            latitude:'',
            longitude:'',

            pessoas : []
        }
        
        const novaPessoa = {
            givenName: '',
            gender: '',
            streetAddress:'',
            city: '',
            state: '',
            kilograms:'' ,
            birthday: '',
            centimeters:'', 
            bloodType: '',
            latitude: '',
            longitude: ''
        }
    }

        componentDidMount(){
           this.buscarPessoa();
        
        }

            
        

        componentWillUnmount(){
        
        }*/
        
    
        
        
        
        

        
        
        
        /*buscarPessoa = () => {
            axios.get("http://inovia.eastus.cloudapp.azure.com/api/person")
            .then(response => {
                const data = response.data
                Pessoas.state.textContent = JSON.stringify(data)
                
            })
            .catch(error => console.log(error))
        }

        deletarPessoa = (id) => {
            
                axios.delete(`${"http://inovia.eastus.cloudapp.azure.com/api/person"}/2`)

            }

        cadastrarPessoa() {
            axios.post("http://inovia.eastus.cloudapp.azure.com/api/person",Pessoas.state)
            .then(response => {
                console.log(response.data)
            })
            .catch(error => console.log(error))
        }

        
        
        atualizaPessoa(){

        }
            
        
            

        
    
    
        

        atualizaNome = (e) => {
            this.setState(
            {
                givenName: e.target.value,
                
            
            }
            )
        }
        atualizaGenero = (e) => {
            this.setState(
            {
                gender: e.target.value,
                
            
            }
            )
        }
        atualizaEndereco = (e) => {
            this.setState(
            {
                streetAddress: e.target.value,
                
            
            }
            )
        }
        atualizaCidade = (e) => {
            this.setState(
            {
                city: e.target.value,
                
            
            }
            )
        }
        
        atualizaEstado = (e) => {
            this.setState(
            {
                state: e.target.value,
                
            
            }
            )
        }
        atualizaPeso = (e) => {
            this.setState(
            {
                kilograms: e.target.value,
                
            
            }
            )
        }
        atualizaIdade = (e) => {
            this.setState(
            {
                birthday: e.target.value,
                
            
            }
            )
        }
        atualizaAltura = (e) => {
            this.setState(
            {
                centimeters: e.target.value,
                
            
            }
            )
        }
        atualizaSangue = (e) => {
            this.setState(
            {
                bloodType: e.target.value,
                
            
            }
            )
        }
        atualizaLatitude = (e) => {
            this.setState(
            {
                latitude: e.target.value,
                
            
            }
            )
        }
        atualizaLongitude = (e) => {
            this.setState(
            {
                longitude: e.target.value,
                
            
            }
            )
        }
        
        submit = () => {
            const pessoa = {
                givenName: this.state.givenName,
                gender: this.state.gender,
                streetAddress: this.state.streetAddress,
                city: this.state.city,
                state: this.state.state,
                kilograms: this.state.kilograms,
                birthday: this.state.birthday,
                centimeters: this.state.centimeters,
                bloodType: this.state.bloodType,
                latitude: this.state.latitude,
                longitude: this.state.longitude
            }
            this.cadastrarPessoa(pessoa);
        }
        
        */