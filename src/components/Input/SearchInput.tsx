import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchSuggesstion from "../shareComponents/dropdown/SearchSuggesstion";
import { AppContextType } from "../../types/types";
import { useContext, useRef } from "react";
import { AppContext } from "../../contexts/AppContext";
const SearchInput = () => {
    const { searchInputOnFocus, useOutSideClick } = useContext(AppContext) as AppContextType;
    const wrapperRef = useRef<HTMLDivElement>(null);
    useOutSideClick(wrapperRef);
    const onTypeSearch = (value: string) => {
        console.log(value);
    };
    return (
        <div className="search_input_wrapper" onFocus={searchInputOnFocus} ref={wrapperRef}>
            <input type="text" className="border-slate-200 p-2 w-full rounded-lg" placeholder="Search" onChange={(v) => onTypeSearch(v.target.value)} />
            <div className="absolute right-0">
                <button type="button" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <SearchSuggesstion />
        </div>
    );
};

export default SearchInput;
