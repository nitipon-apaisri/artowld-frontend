import { RefObject, createContext, useEffect, useState } from "react";
import { AppContextType, contextChildren, productCardProps } from "../types/types";
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
    const [showSearchSuggesstions, setShowSearchSuggesstions] = useState<boolean>(false);
    const [searchHistory, setSearchHistory] = useState<object[]>([]);
    const [searchResult, setSearchResult] = useState<productCardProps[]>([]);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang);
        }
        const searchHistoryData = localStorage.getItem("searchHistory");
        if (searchHistoryData) {
            setSearchHistory(JSON.parse(searchHistoryData));
            setShowSearchSuggesstions(true);
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
                    setShowSearchSuggesstions(false);
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const searchInputOnFocus = () => {
        if (searchHistory.length > 0) setShowSearchSuggesstions(true);
        if (searchResult.length > 0) setShowSearchSuggesstions(true);
    };

    const onSearch = (v: string) => {
        console.log(v);
        const product = [
            {
                product: {
                    creator: "Lorem Ipsum",
                    title: "product 1",
                    price: 0,
                },
            },
            {
                product: {
                    creator: "Lorem Ipsum",
                    title: "product 2",
                    price: 0,
                },
            },
        ];
        setSearchResult(product);
        setTimeout(() => {
            setShowSearchSuggesstions(true);
        }, 300);
    };
    return (
        <AppContext.Provider
            value={{ lang, isBreakpoint, isSmallScreen, searchHistory, searchResult, showSearchSuggesstions, changeLanguage, useOutSideClick, searchInputOnFocus, onSearch, setShowSearchSuggesstions }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContxtProvider };
