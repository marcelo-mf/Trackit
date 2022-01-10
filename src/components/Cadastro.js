import { useState } from "react"
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "./LogoTrackIt.png";

export default function Cadastro() {

    const[email, setEmail] = useState();
    const[password, setPassword] = useState();
    const[name, setName] = useState();
    const[photo, setPhoto] = useState();

    function handleSignUp(e) {

        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', {
            email: email,
            name: name,
            image: photo,
            password: password
        });

        promise.then(response => console.log(response));

        promise.catch(error => alert(error.response.data.message));
    }

    return (
        <EstiloLogin>
            <form onSubmit={handleSignUp}>
                <img src={logo} alt="Logo"/>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
                <input type="nome" placeholder="nome" onChange={(e) => setName(e.target.value)}/>
                <input type="foto" placeholder="foto" onChange={(e) => setPhoto(e.target.value)}/>
                <button type="submit">Entrar</button>
                <Link to="/">Já tem uma conta? Faça login!</Link>
            </form>
        </EstiloLogin>
    )
}


// ESTILO

const EstiloLogin = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 100%;
    height: 100vh;

    input {
        width: 303px;
        height: 45px;

        border-radius: 5px;
        border: 1.5px solid #D4D4D4;
    }

    input::placeholder{
        padding-left: 10px;
        
        color: #D4D4D4;
        font-size: 15px;
        font-family: "Lexend Deca";
    }

    button {
        width: 310px;
        height: 45px;

        background-color: #52B6FF;

        border: none;
        border-radius: 5px;

        color: #FFFFFF;
        font-size: 19px;
        font-family: "Lexend Deca";
    }

    a {
        color: #52B6FF;
        text-decoration: underline;

        margin-top: 30px;

        font-family: "Lexend Deca";
        font-size: 13px;
    }

    img {
        margin-bottom: 15px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        width: 100%;
        height: 100vh;
    }
`;