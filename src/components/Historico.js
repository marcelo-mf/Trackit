import styled from "styled-components"

import Topo from "./Topo"
import Menu from "./Menu"

export default function Historico({photo}) {
    return(
        <>
            <Topo photo={photo}/>
            <StyledHistorico>
                <h2>Histórico</h2>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </StyledHistorico>
            <Menu/>
        </>
    )
}

const StyledHistorico = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 17px;

    padding-top: 90px;
    padding-left: 15px;

    height: 100vh;
    width: 100%;
    background-color: #F2F2F2;

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
        color: #666666;
        line-height: 23px;
    }

`

