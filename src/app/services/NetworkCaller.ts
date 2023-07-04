import axios, {AxiosRequestConfig} from "axios";

export interface ResponseToken {
    token: string,
    type: string,
    expiresIn: number,
    refreshToken: string
}

export default class NetworkCaller {
    getToken = async (code: string): Promise<ResponseToken> => {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: import.meta.env.VITE_REDIRECT_URI,
            },
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                auth: {
                    username: import.meta.env.VITE_CLIENT_ID,
                    password: import.meta.env.VITE_CLIENT_SECRET
                }
            },
        );

        return {
            token: response.data.access_token,
            type: response.data.token_type,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token
        }
    }

    getRefreshToken = async (refreshToken: string): Promise<ResponseToken> => {
        const body = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        }

        const config: AxiosRequestConfig = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(`${import.meta.env.VITE_CLIENT_ID}:${import.meta.env.VITE_CLIENT_SECRET}`)
            }
        }
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            body,
            config
        )

        return {
            token: response.data.access_token,
            type: response.data.token_type,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token
        }
    }
}