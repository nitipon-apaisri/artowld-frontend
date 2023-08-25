import { createContext, useEffect, useState } from "react";
import { UserContextType, contextChildren } from "../types/types";

const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider = ({ children }: contextChildren) => {
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) setToken(token);
    }, []);

    return <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>;
};

export { UserContext, UserContextProvider };
