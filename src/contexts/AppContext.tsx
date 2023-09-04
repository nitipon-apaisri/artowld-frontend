import { RefObject, createContext, useEffect, useState } from "react";
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
    const [isSearchInputFocus, setIsSearchInputFocus] = useState<boolean>(false);
    const [searchHistory, setSearchHistory] = useState<object[]>([]);
    const [searchResult, setSearchResult] = useState<object[]>([]);
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang);
        }
        const searchHistoryData = localStorage.getItem("searchHistory");
        if (searchHistoryData) {
            setSearchHistory(JSON.parse(searchHistoryData));
        }
    }, [i18n]);

    useEffect(() => {
        const updateSize = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        if (innerWidth < breakpoints) setIsBreakpoint(true);
        else setIsBreakpoint(false);
        if (innerWidth < smallScreen) setIsSmallScreen(true);
        else setIsSmallScreen(false);
    }, [innerWidth]);

    const changeLanguage = (lang: string) => {
        localStorage.setItem("lang", lang);
        i18n.changeLanguage(lang);
        setLang(lang);
        window.location.reload();
    };

    const useOutSideClick = (ref: RefObject<HTMLDivElement>) => {
        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    setIsSearchInputFocus(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const searchInputOnFocus = () => {
        setIsSearchInputFocus(true);
    };

    const onSearch = (v: string) => {
        console.log(v);
        setSearchResult([{ name: "test" }]);
    };
    return (
        <AppContext.Provider value={{ lang, isBreakpoint, isSmallScreen, isSearchInputFocus, searchHistory, searchResult, changeLanguage, useOutSideClick, searchInputOnFocus, onSearch }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContxtProvider };
