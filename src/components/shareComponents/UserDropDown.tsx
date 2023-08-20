// import { dropdownProps } from "../../types/types";

import { useTranslation } from "react-i18next";
const UserDropDown = () => {
    const { i18n } = useTranslation();
    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const lng = currentLanguage === "en" ? "th" : "en";
        i18n.changeLanguage(lng);
    };
    return (
        <div className="dropdown w-44">
            <ul className="py-2 text-s text-black" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a onClick={() => changeLanguage()}>Switch language</a>
                </li>
                <li>
                    <a href="#">Earnings</a>
                </li>
                <li>
                    <a href="#">Sign out</a>
                </li>
            </ul>
        </div>
    );
};

export default UserDropDown;
