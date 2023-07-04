import NetworkCaller, { ResponseToken } from "../services/NetworkCaller.ts";

export default class NetworkRepository {
    private service: NetworkCaller

    public constructor(networkCaller: NetworkCaller) {
        this.service = networkCaller;
    }

    getNewToken = async (code: string) : Promise<ResponseToken> => {
        return await this.service.getToken(code)
    }

    getRefreshToken = async (refreshToken: string): Promise<ResponseToken> => {
        return await this.service.getRefreshToken(refreshToken)
    }
}