import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType, productCardProps } from "../../../types/types";

const SearchSuggesstion = () => {
    const { showSearchSuggesstions, searchResult } = useContext(AppContext) as AppContextType;

    return (
        <div className={`search_suggestions_wrapper ${showSearchSuggesstions ? "top-16 h-24 duration-500" : "top-12 h-0 invisible"} ease-out`}>
            {searchResult.map((item: productCardProps, index: number) => (
                <div key={index} className="search_suggestions_item">
                    <p>{item.product.creator}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchSuggesstion;
