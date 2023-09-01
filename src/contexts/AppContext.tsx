import { createContext, useEffect, useState } from "react";
import { AppContextType, contextChildren } from "../types/types";
import { useTranslation } from "react-i18next";

const AppContext = createContext<AppContextType | null>(null);
const AppContxtProvider = ({ children }: contextChildren) => {
    const { i18n } = useTranslation();
    const breakpoints = 880;
    const smallScreen = 480;
    const [lang, setLang] = useState<string>("en");
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang);
        }
    }, [i18n]);
    useEffect(() => {
        const updateSize = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        if (innerWidth < breakpoints) setIsBreakpoint(true);
        if (innerWidth < smallScreen) setIsSmallScreen(true);
        else setIsBreakpoint(false);
    }, [innerWidth]);
    const changeLanguage = (lang: string) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
        setLang(lang);
        window.location.reload();
    };
    return <AppContext.Provider value={{ lang, isBreakpoint, isSmallScreen, changeLanguage }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContxtProvider };
