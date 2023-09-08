import { RefObject, createContext, useEffect, useState } from "react";
import { AppContextType, contextChildren, productCardProps } from "../types/types";
import { useTranslation } from "react-i18next";
import { sampleCollectedProducts } from "../data/sample";
import removeDuplicate from "../utils/removeDuplicate";

const AppContext = createContext<AppContextType | null>(null);
const AppContxtProvider = ({ children }: contextChildren) => {
    const { i18n } = useTranslation();
    const breakpoints = 880;
    const smallScreen = 480;
    const [lang, setLang] = useState<string>("en");
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [showSearchsuggests, setShowSearchsuggests] = useState<boolean>(false);
    const [searchHistory, setSearchHistory] = useState<object[]>([]);
    const [searchResultProducts, setSearchResultProducts] = useState<productCardProps[]>([]);
    const [searchResultUsers, setSearchResultUsers] = useState<productCardProps[]>([]);

    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            setLang(lang);
            i18n.changeLanguage(lang);
        }
        const searchHistoryData = localStorage.getItem("searchHistory");
        if (searchHistoryData) {
            setSearchHistory(JSON.parse(searchHistoryData));
            toggleOnSearchsuggests();
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
    const toggleOnSearchsuggests = () => {
        setShowSearchsuggests(true);
    };
    const hideSearchsuggests = () => {
        setShowSearchsuggests(false);
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
                    hideSearchsuggests();
                }
            };
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    const searchInputOnFocus = () => {
        if (searchHistory.length > 0) toggleOnSearchsuggests();
        if (searchResultProducts.length > 0 || searchResultUsers.length > 0) toggleOnSearchsuggests();
    };

    const onSearch = (v: string) => {
        const creators = sampleCollectedProducts.filter((product: productCardProps) => {
            const byCreator = product.creator?.toLocaleLowerCase();
            return byCreator?.includes(v.toLocaleLowerCase());
        });
        const products = sampleCollectedProducts.filter((product: productCardProps) => {
            const byTitle = product.title?.toLocaleLowerCase();
            return byTitle?.includes(v.toLocaleLowerCase());
        });
        const removeDuplicateCreator = removeDuplicate(creators as never, "creator");
        const removeDuplicateProduct = removeDuplicate(products as never, "title");
        setSearchResultProducts(removeDuplicateProduct);
        setSearchResultUsers(removeDuplicateCreator);
        setTimeout(() => {
            toggleOnSearchsuggests();
        }, 300);
    };
    return (
        <AppContext.Provider
            value={{
                lang,
                isBreakpoint,
                isSmallScreen,
                searchHistory,
                searchResultProducts,
                searchResultUsers,
                showSearchsuggests,
                changeLanguage,
                useOutSideClick,
                searchInputOnFocus,
                onSearch,
                toggleOnSearchsuggests,
                hideSearchsuggests,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppContxtProvider };
