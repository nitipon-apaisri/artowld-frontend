import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { AppContextType, productCardProps } from "../../../types/types";

const Searchsuggest = () => {
    const { showSearchsuggests, searchResultProducts, searchResultUsers } = useContext(AppContext) as AppContextType;

    return (
        <div className={`search_suggestions_wrapper ${showSearchsuggests ? "top-16 h-fit duration-300" : "top-12 h-0 invisible"} ease-out`}>
            <div className="search_suggestions_list">
                {searchResultProducts.length > 0 && (
                    <ul>
                        <label>ITEMS</label>
                        {searchResultProducts.map((item: productCardProps, index: number) => (
                            <li key={index} className="search_suggestions_item ">
                                <div className="suggest_img"></div>
                                <a>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
                {searchResultUsers.length > 0 && (
                    <ul>
                        <label>USERS</label>
                        {searchResultUsers.map((item: productCardProps, index: number) => (
                            <li key={index} className="search_suggestions_item ">
                                <div className="suggest_img"></div>
                                <a>{item.creator}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Searchsuggest;
