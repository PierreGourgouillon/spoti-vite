import {useContext} from "react";
import TokenContext from "../context.tsx";

export default function HomePage() {
    const { token, refreshToken } = useContext(TokenContext)

    return(
        <div>
            <div>token: {token}</div>
            <div>refresh: {refreshToken}</div>
        </div>
    )
}