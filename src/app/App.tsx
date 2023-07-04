import {useState} from "react";
import TokenContext from "./context.tsx";
import AuthenticationPage from "./components/AuthenticationPage.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Callback from "./components/Callback.tsx";
import HomePage from "./components/HomePage.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";

function App() {
    const [token, setToken] = useState((): string => {
        const localData = localStorage.getItem('userToken');
        return localData ? JSON.parse(localData).token : "";
    });
    const [refreshToken, setRefreshToken] = useState((): string => {
        const localData = localStorage.getItem('userToken');
        return localData ? JSON.parse(localData).refreshToken : "";
    })

    // TODO: Regarder pour les private route et faire la méthode pour récup les playlists et regarder la gestion de l'utilisateur actuel et la déconnexion

    // @ts-ignore
    return (
        <BrowserRouter>
            <TokenContext.Provider value={{ token, refreshToken, setToken: setToken, setRefreshToken }}>
                <Routes>
                    <Route element={<PrivateRoute/>}>
                        <Route element={<HomePage/>} path="/"/>
                    </Route>
                    <Route element={<AuthenticationPage/>} path="/login"/>
                    <Route element={<Callback/>} path="/callback">
                    </Route>
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
  )
}

export default App