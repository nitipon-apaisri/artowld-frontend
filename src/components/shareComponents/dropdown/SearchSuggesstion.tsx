import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType } from "../../../types/types";

const SearchSuggesstion = () => {
    const { isSearchInputFocus } = useContext(AppContext) as AppContextType;

    return <div className={`search_suggestions_wrapper ${isSearchInputFocus ? "top-16 h-24 duration-300" : "top-12 h-0 invisible"} ease-out`}></div>;
};

export default SearchSuggesstion;
