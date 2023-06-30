import {createContext} from "react";
interface TokenModel {
    token: string,
    refreshToken: string
    setToken: (token: string) => void
    setRefreshToken: (refreshToken: string) => void
}

const TokenContext = createContext<TokenModel>({
    token: "",
    refreshToken: "",
    setToken: () => {},
    setRefreshToken: () => {}
});

export default TokenContext;