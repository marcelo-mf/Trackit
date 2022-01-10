import Topo from "./Topo";
import Menu from "./Menu";
import { AddOutline } from 'react-ionicons';
import { TrashOutline } from 'react-ionicons';
import axios from "axios";
import { useEffect } from "react";

import styled from "styled-components";
import { useState } from "react/cjs/react.development";



export default function Habitos({photo, token}) {

    const [habitName, sethabitName] = useState('');
    const [displayCreate, setDisplayCreate] = useState(false);
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitos, setHabitos] = useState(null);

    const diasSemana = [{name:"D", id:0}, {name:"S", id:1}, {name:"T", id:2}, {name:"Q", id:3}, {name:"Q", id:4}, {name:"S", id:5}, {name:"S", id:6}];

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    } 

    useEffect(() => {
        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        
        promise.then(response => {
            setHabitos(response.data)
    
        })
    }, [habitos]);

    if(habitos === null) {
        return <h1>carregando...</h1>
    }

    function handleSave(e) {
        e.preventDefault();

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', {
            name: habitName,
            days: selectedDays
        }, config);

        promise.then(response => {
            setDisplayCreate(false)
        })

        promise.catch(error => alert(error.response.data.message));
    }


    function handleSelectDay(dia) {

        if(selectedDays.includes(dia.id)) {
            return;
        }

        setSelectedDays([...selectedDays, dia.id]);
    }

    return(
        <Container>
            <Topo photo={photo}/>
            <TopHabitos>
                <h2>Meus hábitos</h2>
                <div className="add-habito" onClick={() => setDisplayCreate(true)}>
                    <AddOutline color={'#FFFFFF'} height="20px" width="20px" />
                </div>
            </TopHabitos>
            { displayCreate && (<CriarHabito>
                <input type="text" placeholder="nome do hábito" onChange={(e) => sethabitName(e.target.value)}/>
                <div className="dias-semana">
                    {diasSemana.map(dia => (
                        <div 
                        key={dia.id} 
                        className={selectedDays.includes(dia.id) ? 'dia-selecionado' : 'dia'} 
                        onClick={() => handleSelectDay(dia)} >
                            {dia.name}
                        </div>
                    ))}
                </div>
                <div className="cancel-save">
                    <button className="cancel" onClick={() => setDisplayCreate(false)}>cancelar</button>
                    <button className="save" onClick={handleSave}>salvar</button>
                </div>
            </CriarHabito>)}
            <ListaHabitos>
                    {habitos.map(habito => (
                        <div key={habito.id} className="container-habito">
                            <div className="top-habito">
                                <h2>{habito.name}</h2>
                                <TrashOutline color={'#666666'} height="15px" width="13px"/>
                            </div>
                            <div className="container-dias">
                                {diasSemana.map(day => (
                                    <div key={day.id} className={habito.days.includes(day.id) ? 'dia-selecionado' : 'dia'}>
                                        {day.name}
                                    </div>
                                ))}
                            </div>  
                        </div>
                    ))}
            </ListaHabitos>
            {habitos === [] && <ContentHabitos>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </ContentHabitos>}
            <Menu/>
        </Container>
    )
}

const ListaHabitos = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

    width: 100%;

    .top-habito {
        width: 303px;

        padding-right: -8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .container-dias{

        width: 307px;

        gap: 3px;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .container-habito{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        border-radius: 5px;

        gap: 12px;

        padding-left: 17px;

        width: 340px;
        height: 91px;

        background-color: white;
    }

    h2 {

        margin-right: 10px;

        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }

    .dia{

        display: flex;
        justify-content: center;
        align-items: center;

        height: 30px;
        width: 30px;

        border-radius: 5px;
        border: solid 1px #CFCFCF;

        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: #CFCFCF;
    }

    .dia-selecionado{

        display: flex;
        justify-content: center;
        align-items: center;

        background-color:  #CFCFCF;

        height: 30px;
        width: 30px;

        border-radius: 5px;
        border: solid 1px #CFCFCF;

        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: white;
    }

`

const CriarHabito = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    margin-left: 17px;
    margin-bottom: 15px;

    border-radius: 5px;

    width: 340px;
    height: 180px;

    input {

        width: 303px;
        height: 45px;

        border: solid 1px #CFCFCF;
        border-radius: 5px;

        margin-bottom: 8px;
    }

    input::placeholder {
        font-family: "Lexend Deca";
        font-size: 15px;
        font-weight: 400;
        color: #CFCFCF;

        padding-left: 10px;
    }

    .dias-semana {
        display: flex;
        justify-content: flex-start;
        gap: 3px;

        width: 303px;
    }

    .dia{

        display: flex;
        justify-content: center;
        align-items: center;

        height: 30px;
        width: 30px;

        border-radius: 3px;
        border: solid 1px ;

        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: #CFCFCF;
    }

    .dia-selecionado{

        display: flex;
        justify-content: center;
        align-items: center;

        background-color:  #CFCFCF;

        height: 30px;
        width: 30px;

        border-radius: 3px;
        border: solid 1px ;

        font-family: "Lexend Deca";
        font-size: 20px;
        font-weight: 400;
        color: white;
    }

    .cancel-save {

        display: flex;
        justify-content: flex-end;
        align-items: center;

        margin-top: 29px;

        width: 303px;

        gap: 15px;
    }

    .cancel-save button {
        width: 84px;
        height: 35px;

        border-radius: 5px;
        border: none;

        background-color: white;

        color: #52B6FF;
        font-family: "Lexend Deca";
        font-size: 16px;
        font-weight: 400;
        text-align: center;
    }

    .cancel-save .save{
        background-color: #52B6FF;

        color: white;
    }



`

const Container = styled.div`

    width: 100%;
    
    background-color: #F2F2F2;

    padding-bottom: 110px;

`

const TopHabitos = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 90px;
    padding-left: 18px;
    padding-right: 18px;
    padding-bottom: 18px;

    .add-habito{

        display: flex;
        align-items: center;
        justify-content: center;

        padding-top: 2px;

        height: 35px;
        width: 40px;

        background-color: #52B6FF;

        border-radius: 5px;
    }

    h2{
        font-family: "Lexend Deca";
        font-weight: 400;
        font-size: 23px;
        color: #126BA5;
    }
`

const ContentHabitos = styled.div`

    padding: 0 18px;

    p{
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
        color: #666666;
        line-height: 23px;

        margin-top: 17px;
    }

`