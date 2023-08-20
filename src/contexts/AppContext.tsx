import { createContext, useEffect, useState } from "react";
import { AppContextType, contextChildren } from "../types/types";
import { useTranslation } from "react-i18next";

const AppContext = createContext<AppContextType | null>(null);
const AppContxtProvider = ({ children }: contextChildren) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState<string>("en");
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang);
        }
    }, [i18n]);
    const changeLanguage = (lang: string) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
        setLang(lang);
        window.location.reload();
    };
    return <AppContext.Provider value={{ lang, changeLanguage }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContxtProvider };
