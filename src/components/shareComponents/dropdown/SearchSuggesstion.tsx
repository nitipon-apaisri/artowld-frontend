import { useContext, useRef } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType } from "../../../types/types";

const SearchSuggesstion = () => {
    const { isSearchInputFocus, useOutSideClick } = useContext(AppContext) as AppContextType;
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutSideClick(wrapperRef);
    return <div className={`search_suggestions_wrapper ${isSearchInputFocus ? "h-24" : "h-0 invisible"} duration-300 ease-out`} ref={wrapperRef}></div>;
};

export default SearchSuggesstion;
