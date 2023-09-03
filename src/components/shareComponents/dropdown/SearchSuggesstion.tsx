import { useContext, useRef } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType } from "../../../types/types";

const SearchSuggesstion = () => {
    const { useOutSideClick } = useContext(AppContext) as AppContextType;
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutSideClick(wrapperRef);
    return <div className="search_suggestions_wrapper" ref={wrapperRef}></div>;
};

export default SearchSuggesstion;
