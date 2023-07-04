import {useContext} from "react";
import TokenContext from "../context.tsx";
import {Navigate, Outlet} from "react-router-dom";

// @ts-ignore
export default function PrivateRoute() {
    const { token } = useContext(TokenContext)

    return (
        token != "" ? <Outlet/> : <Navigate to="/login"/>
    )
}