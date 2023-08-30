import { useTranslation } from "react-i18next";
import { AppContextType, UserContextType } from "../../types/types";
import { AppContext } from "../../contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import nav from "../../modules/nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import LanguageDropdown from "../shareComponents/dropdown/LanguageDropdown";
import { UserContext } from "../../contexts/UserContext";
import UserDropDown from "../shareComponents/dropdown/UserDropDown";
import SignUpButton from "../shareComponents/button/SignUpButton";
import SignInButton from "../shareComponents/button/SignInButton";
const Navigation = () => {
    const { t } = useTranslation();
    const { isBreakpoint } = useContext(AppContext) as AppContextType;
    const { currentUser } = useContext(UserContext) as UserContextType;
    const [userDropdown, setUserDropdown] = useState<boolean>(false);
    const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
        setLanguageDropdown(false);
    };
    const toggleLanguageDropdown = () => {
        setUserDropdown(false);
        setLanguageDropdown(!languageDropdown);
    };
    useEffect(() => {
        if (!isBreakpoint) {
            setUserDropdown(false);
            setLanguageDropdown(false);
        }
    }, [isBreakpoint]);
    return (
        <div className="menu_and_user flex flex-row items-center ">
            {!isBreakpoint && (
                <>
                    <nav className={`md:mr-4`}>
                        <ul className="flex flex-row space-x-6 font-medium tracking-wider">
                            {nav.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path}>
                                        <span className="px-4">{t(item.name)}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex flex-row items-center space-x-4">
                        <div className="relative">
                            <FontAwesomeIcon icon={faLanguage} size="xl" className="cursor-pointer" onClick={toggleLanguageDropdown} />
                            {languageDropdown && <LanguageDropdown />}
                        </div>
                    </div>
                    {currentUser !== null ? (
                        <div className="relative">
                            <div className="user md:block hidden bg-slate-500 rounded-full w-10 h-10 ml-10 cursor-pointer" onClick={toggleUserDropdown}></div>
                            {userDropdown && <UserDropDown />}
                        </div>
                    ) : (
                        <>
                            <SignUpButton />
                            <SignInButton />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Navigation;
