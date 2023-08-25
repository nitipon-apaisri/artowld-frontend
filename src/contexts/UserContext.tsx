import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { UserContextType, contextChildren } from "../types/types";
import Api from "../services/api";

const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider = ({ children }: contextChildren) => {
    const api = useMemo(() => new Api(), []);
    const [token, setToken] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<object | null>(null);
    const callBack = useCallback(
        async (token: string) => {
            const res = await api.getUserByToken(token).then((res) => {
                setCurrentUser(res.data);
                return res.data;
            });
            return res;
        },
        [api]
    );

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (token) {
            setToken(token);
            callBack(token);
        }
    }, [callBack]);

    const signIn = async (user: object, rememberMe: boolean) => {
        const res = await api
            .signIn(user)
            .then((res) => {
                if (rememberMe) localStorage.setItem("token", res.data.token);
                else sessionStorage.setItem("token", res.data.token);
                setToken(res.data.token);
                return true;
            })
            .catch((err) => {
                return err.response.data.message;
            });
        return res;
    };

    return <UserContext.Provider value={{ token, currentUser, signIn }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
