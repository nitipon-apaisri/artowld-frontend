import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { UserContextType, UserType, contextChildren } from "../types/types";
import Api from "../services/api";

const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider = ({ children }: contextChildren) => {
    const api = useMemo(() => new Api(), []);
    const [token, setToken] = useState<string | null>(null);
    const [currentUser, setCurrentUser] = useState<UserType | null>(null);
    const getUserById = useCallback(
        async (id: string) => {
            const res = await api.getUserById(id).then((res) => {
                setCurrentUser(res.data);
                return res.data;
            });
            return res;
        },
        [api]
    );

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const userId = localStorage.getItem("userId") || sessionStorage.getItem("userId");
        if (token) {
            setToken(token);
        }
        if (userId && currentUser === null) getUserById(userId as string);
    }, [getUserById, currentUser]);

    const signIn = async (user: object, rememberMe: boolean) => {
        const res = await api
            .signIn(user)
            .then((res) => {
                if (rememberMe) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("userId", res.data.userId);
                } else {
                    sessionStorage.setItem("token", res.data.token);
                    sessionStorage.setItem("userId", res.data.userId);
                }
                setToken(res.data.token);
                return true;
            })
            .catch((err) => {
                return err.response.data.message;
            });
        return res;
    };

    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userId");
        setToken(null);
        setCurrentUser(null);
    };

    return <UserContext.Provider value={{ token, currentUser, signIn, signOut }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
