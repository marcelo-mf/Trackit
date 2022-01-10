import styled from "styled-components"

import logo from "./TrackIt.png"

export default function Topo({photo}) {
    return(
        <StyledTopo>
            <img src={logo} alt="logo"/>
            <img className="profile" src={photo} alt="foto de perfil"/>
        </StyledTopo>
    )
}

const StyledTopo = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    height: 70px;
    width: 100%;

    background-color: #126BA5;

    position: fixed;
    top: 0px;
    left: 0px;

    z-index: 2000;

    .profile{
        height: 51px;
        width: 51px;

        border-radius: 100px;
    }
;
`