import { useState } from "react"
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import logo from "./LogoTrackIt.png";

export default function Login({ setToken, setPhoto }) {

    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSignIn(e) {
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', {
            email,
            password
        });

        promise.then(response => {
            setToken(response.data.token)
            setPhoto(response.data.image)
            navigate('/Hoje')
        })

        promise.catch(error => alert(error.response.data.message));
    }

    return (
        <EstiloLogin>
            <form onSubmit={handleSignIn}>
                <img src={logo} alt="logo"/>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Entrar</button>
                <Link to="/Cadastro">Não tem uma conta? Cadastre-se!</Link>
            </form>
        </EstiloLogin>
    )
}

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


