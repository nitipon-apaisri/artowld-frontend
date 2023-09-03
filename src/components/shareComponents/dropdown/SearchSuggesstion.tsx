import { useContext, useRef } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType } from "../../../types/types";

const SearchSuggesstion = () => {
    const { isSearchInputFocus, useOutSideClick } = useContext(AppContext) as AppContextType;
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutSideClick(wrapperRef);
    return <div className={`search_suggestions_wrapper ${isSearchInputFocus ? "top-16 h-24 duration-300" : "top-12 h-0 invisible"} ease-out`} ref={wrapperRef}></div>;
};

export default SearchSuggesstion;
