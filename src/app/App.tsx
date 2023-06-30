import {useState} from "react";
import TokenContext from "./context.tsx";
import AuthenticationPage from "./components/AuthenticationPage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Callback from "./components/Callback.tsx";
import HomePage from "./components/HomePage.tsx";

function App() {
    const [token, setToken] = useState((): string => {
        const localData = localStorage.getItem('userToken');
        return localData ? JSON.parse(localData).token : "";
    });
    const [refreshToken, setRefreshToken] = useState((): string => {
        const localData = localStorage.getItem('userToken');
        return localData ? JSON.parse(localData).refreshToken : "";
    })

    return (
        <BrowserRouter>
            <TokenContext.Provider value={{ token, refreshToken, setToken: setToken, setRefreshToken }}>
                <Routes>
                    <Route path="/" element={<AuthenticationPage />}/>
                    <Route path="/home" element={<HomePage />}/>
                    <Route path="/callback" element={<Callback />}/>
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
  )
}

export default App