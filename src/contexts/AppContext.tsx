import { RefObject, createContext, useEffect, useState } from "react";
import { AppContextType, contextChildren, productCardProps } from "../types/types";
import { useTranslation } from "react-i18next";
import { sampleCollectedProducts } from "../data/sample";

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
            toggleOnSearchSuggesstions();
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
    const toggleOnSearchSuggesstions = () => {
        setShowSearchSuggesstions(true);
    };
    const hideSearchSuggesstions = () => {
        setShowSearchSuggesstions(false);
    };
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
                    hideSearchSuggesstions();
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const searchInputOnFocus = () => {
        if (searchHistory.length > 0) toggleOnSearchSuggesstions();
        if (searchResult.length > 0) toggleOnSearchSuggesstions();
    };

    const onSearch = (v: string) => {
        const products = sampleCollectedProducts.filter((product: productCardProps) => {
            const byCreator = product.creator?.toLocaleLowerCase();
            const byTitle = product.title?.toLocaleLowerCase();
            return byCreator?.includes(v.toLocaleLowerCase()) || byTitle?.includes(v.toLocaleLowerCase());
        });

        console.log(products);
        setSearchResult(products);
        setTimeout(() => {
            toggleOnSearchSuggesstions();
        }, 300);
    };
    return (
        <AppContext.Provider
            value={{
                lang,
                isBreakpoint,
                isSmallScreen,
                searchHistory,
                searchResult,
                showSearchSuggesstions,
                changeLanguage,
                useOutSideClick,
                searchInputOnFocus,
                onSearch,
                toggleOnSearchSuggesstions,
                hideSearchSuggesstions,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContxtProvider };
