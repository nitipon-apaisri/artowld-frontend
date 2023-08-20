import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { AppContextType } from "../../types/types";

const LanguageDropdown = () => {
    const { lang, changeLanguage } = useContext(AppContext) as AppContextType;
    return (
        <div className="dropdown w-32">
            <ul className=" text-s text-black divide-y divide-gray-100" aria-labelledby="dropdownDefaultButton">
                <li onClick={() => changeLanguage("en")}>
                    <b className={lang === "en" ? "text-black" : "text-gray-400"}>English</b>
                </li>
                <li onClick={() => changeLanguage("th")}>
                    <b className={lang === "th" ? "text-black" : "text-gray-400"}>ไทย</b>
                </li>
            </ul>
        </div>
    );
};

export default LanguageDropdown;
