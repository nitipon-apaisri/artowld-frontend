import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/UserContext";
import { AppContextType, UserContextType } from "../types/types";
import SignInButton from "./shareComponents/button/SignInButton";
import UserDropDown from "./shareComponents/dropdown/UserDropDown";
import LanguageDropdown from "./shareComponents/dropdown/LanguageDropdown";
import { AppContext } from "../contexts/AppContext";
import SignUpButton from "./shareComponents/button/SignUpButton";
import nav from "../modules/nav";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
    const { t } = useTranslation();
    const { currentUser } = useContext(UserContext) as UserContextType;
    const { isBreakpoint } = useContext(AppContext) as AppContextType;
    const [userDropdown, setUserDropdown] = useState<boolean>(false);
    const [isSidebarToggle, setIsSidebarToggle] = useState<boolean>(false);
    const [languageDropdown, setLanguageDropdown] = useState<boolean>(false);
    const toggleUserDropdown = () => {
        setUserDropdown(!userDropdown);
        setLanguageDropdown(false);
    };
    const toggleSidebar = () => {
        setIsSidebarToggle(!isSidebarToggle);
        document.body.style.overflow = "hidden";
        if (isSidebarToggle) document.body.style.overflow = "auto";
    };

    const toggleLanguageDropdown = () => {
        setUserDropdown(false);
        setLanguageDropdown(!languageDropdown);
    };

    useEffect(() => {
        if (!isBreakpoint) {
            setIsSidebarToggle(false);
            setLanguageDropdown(false);
        }
    }, [isSidebarToggle, isBreakpoint]);
    return (
        <header>
            <div className={`app_header flex flex-row px-10 py-8 justify-between bg-white fixed w-full z-50 top-0`}>
                <div className="logo flex flex-row items-center space-x-4">
                    {isBreakpoint && <FontAwesomeIcon icon={isSidebarToggle ? faXmark : faBars} className={`cursor-pointer min-w-[40px]`} size="2xl" onClick={() => toggleSidebar()} />}
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
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
            </div>
            <Sidebar isSidebarToggle={isSidebarToggle} />
        </header>
    );
};

export default Header;
