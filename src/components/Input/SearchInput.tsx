import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchInput = () => {
    return (
        <div className="search_input_wrapper">
            <input type="text" className="border-slate-200 p-2 w-full rounded-lg" placeholder="Search" />
            <div className="absolute right-0">
                <button type="button" className="hover:bg-transparent">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    );
};

export default SearchInput;
