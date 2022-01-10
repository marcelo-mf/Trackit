import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login"
import Cadastro from "./Cadastro"
import Hoje from "./Hoje";
import Habitos from "./Habitos";
import Historico from "./Historico";
import { useState } from "react/cjs/react.development";

export default function App() {

    const [token, setToken] = useState('');
    const [photo, setPhoto] = useState('')

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} setPhoto={setPhoto}/>}/>
                <Route path="/Cadastro" element={<Cadastro />}/> 
                <Route path="/Hoje" element={<Hoje token={token} photo={photo}/>}/> 
                <Route path="/habitos" element={<Habitos photo={photo} token={token}/>}/> 
                <Route path="/Historico" element={<Historico photo={photo}/>}/> 
            </Routes>
        </BrowserRouter>
    )
}
