import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchButton = () => {
    return (
        <div>
            <button type="button" className="bg-[#EFEFEF] rounded-lg">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
};

export default SearchButton;
