import {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import NetworkCaller from "../services/NetworkCaller.ts";
import TokenContext from "../context.tsx";
import NetworkRepository from "../repositories/NetworkRepository.ts";

export default function Callback() {
    const networkRepository: NetworkRepository = new NetworkRepository(new NetworkCaller())
    const location = useLocation();
    const { setToken, setRefreshToken } = useContext(TokenContext)
    const navigate = useNavigate()

    useEffect(() => {
        const urlParams: URLSearchParams = new URLSearchParams(location.search);
        const code: string | null = urlParams.get('code');

        if (code != null) {
            networkRepository.getNewToken(code)
                .then((response) => {
                    setToken(response.token)
                    setRefreshToken(response.refreshToken)
                    localStorage.setItem('userToken', JSON.stringify(response))
                    navigate("/")
                })
        }
    }, [location]);
    return <div>Loading...</div>
}