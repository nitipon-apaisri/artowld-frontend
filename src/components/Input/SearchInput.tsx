import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Searchsuggest from "../shareComponents/dropdown/SearchSuggestion";
import { AppContextType } from "../../types/types";
import { useContext, useRef, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
const SearchInput = () => {
    const { searchInputOnFocus, useOutSideClick, onSearch, hideSearchsuggests, clearSearchResult } = useContext(AppContext) as AppContextType;
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [timer, setTimer] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");
    useOutSideClick(wrapperRef);
    const onTypeSearch = (value: string) => {
        if (value.length === 0) clearSearchResult();
        if (value.length < 3) hideSearchsuggests();
        if (value.length < 3) return;
        if (timer) clearTimeout(timer);
        setTimer(
            setTimeout(() => {
                onSearch(value);
            }, 1000)
        );
        setSearchQuery(value);
    };
    const onFocus = () => {
        if (searchQuery.length === 0) clearSearchResult();
        if (searchQuery.length >= 3) searchInputOnFocus();
    };
    return (
        <div className="search_input_wrapper" onFocus={onFocus} ref={wrapperRef}>
            <input type="text" className="border-slate-200 p-2 w-full rounded-lg" placeholder="Search" onChange={(v) => onTypeSearch(v.target.value)} />
            <div className="absolute right-0">
                <button type="button" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <Searchsuggest />
        </div>
    );
};

export default SearchInput;
