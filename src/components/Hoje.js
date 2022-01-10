import styled from "styled-components"
import { useState, useEffect } from "react"
import { CheckmarkOutline } from 'react-ionicons'
import axios from "axios"


import Topo from "./Topo"
import Menu from "./Menu"

export default function Hoje({photo, token}) {

    const[habitos, setHabitos] = useState(null);
    const[selectedhabits, setSelectedHabits] = useState([])

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);
        
        promise.then(response => {
            setHabitos(response.data)
        })
    }, [habitos]);

    if(habitos === null) {
        return <h1>carregando...</h1>
    }

    function SelectHabit(e, id, done) {
        e.preventDefault();

        if(done === true) {
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, {}, config)

            promise.then();

            promise.catch(error => alert(error.response.data.message));

            return;
        }

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, {}, config);

        promise.then();

        promise.catch(error => alert(error.response.data.message));
    }

    return(
        <StyledHoje>
            <Topo photo={photo}/>
            <TopHoje>
                <h2>Hoje</h2>
                <p>Nenhum hábito concluído ainda</p>
            </TopHoje>
            <ListaHabitos>
                {habitos.map( habito => (
                    <div key={habito.id} className='container-habito'>
                        <div className="habito-esquerda">
                            <h2>{habito.name}</h2>
                            <p>Sequencia atual: {habito.currentSequence} dias</p>
                            <p>Seu recorde: {habito.highestSequence} dias</p>
                        </div> 
                        <div className={habito.done === false ? 'check' : 'check-selecionado'} onClick={(event) =>SelectHabit(event, habito.id, habito.done)}>
                            <CheckmarkOutline color={'#FFFFFF'} height="35px" width="42px"/>
                        </div>  
                    </div>
                ))}
            </ListaHabitos>
            <Menu />
        </StyledHoje>
    )
}

const StyledHoje = styled.div`

    height: 100vh;
    width: 100%;

    background-color: #F2F2F2;

    padding-top: 90px;
    padding-bottom: 110px;

`

const TopHoje = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-left: 17px;
    padding-bottom: 17px;

    gap: 5px;

    h2{
        font-family: "Lexend Deca";
        font-size: 23px;
        font-weight: 400;
        color: #126BA5;
    }

    p{
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
    }
`

const ListaHabitos = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    padding-bottom: 110px;

    background-color: #F2F2F2;

    .check {
        height: 69px;
        width: 69px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #EBEBEB;

        border-radius: 5px;
    }

    .check-selecionado {
        height: 69px;
        width: 69px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #8FC549;

        border-radius: 5px;
    }

    .container-habito{

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 17px;

        width: 340px;
        height: 94px;

        background-color: white;

        border-radius: 5px;
    }

    .habito-esquerda {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .habito-esquerda h2 {
        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: #666666;

        margin-bottom: 20px;
    }

    .habito-esquerda p {
        font-family: "Lexend Deca";
        font-size: 13px;
        font-weight: 400;
        color: #666666;
    }

`