import axios from "axios";

class Api {
    protected api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

    async registerUser(data: unknown) {
        const res = this.api.post("/user/signup", data);
        return res;
    }
}

export default Api;
