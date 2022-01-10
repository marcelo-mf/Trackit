import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Menu() {

    const navigate = useNavigate();

    return(
        <StyledMenu>
            <button onClick={() => navigate('/Habitos')}>Hábitos</button>
            <div onClick={() => navigate('/Hoje')} className="hoje">
                <h2>Hoje</h2>
            </div>
            <button onClick={() => navigate('/Historico')}>Histórico</button>
        </StyledMenu>
    )
}

const StyledMenu = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 25px;

    height: 70px;
    width: 100%;

    background-color: white;

    position: fixed;
    bottom: 0px;
    left: 0px;

    z-index: 2000;

    button {

        border: none;
        background-color: white;

        color: #52B6FF;
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 400;
    }

    .hoje{

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 100px;
        background-color: #52B6FF;

        height: 91px;
        width: 91px;

        margin-bottom: 40px;
    }

    .hoje h2{

        color: white;
        font-family: "Lexend Deca";
        font-size: 18px;
        font-weight: 300;
    }

;`