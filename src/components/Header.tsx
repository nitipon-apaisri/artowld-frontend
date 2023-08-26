import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../contexts/UserContext";
import { AppContextType, UserContextType } from "../types/types";
import SignInButton from "./shareComponents/SignInButton";
import UserDropDown from "./shareComponents/UserDropDown";
import LanguageDropdown from "./shareComponents/LanguageDropdown";
import { AppContext } from "../contexts/AppContext";
import SignUpButton from "./shareComponents/SignUpButton";
const Header = () => {
    const { t } = useTranslation();
    const { currentUser, token } = useContext(UserContext) as UserContextType;
    const { lang, changeLanguage } = useContext(AppContext) as AppContextType;
    const breakpoint = 880;
    const [userDropdown, setUserDropdown] = useState<boolean>(false);
    const [isSidebarToggle, setIsSidebarToggle] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [showLanguages, setShowLanguages] = useState<boolean>(false);
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
        const updateSize = () => {
            setInnerWidth(window.innerWidth);
            if (innerWidth > breakpoint) {
                setIsSidebarToggle(false);
                setShowLanguages(false);
                setLanguageDropdown(false);
            }
        };
        window.addEventListener("resize", updateSize);
        updateSize();
    }, [isSidebarToggle, innerWidth]);
    return (
        <header>
            <div className={`app_header flex flex-row px-10 py-8 justify-between bg-white fixed w-full z-50 top-0`}>
                <div className="logo flex flex-row items-center space-x-4">
                    {innerWidth < breakpoint && <FontAwesomeIcon icon={isSidebarToggle ? faXmark : faBars} className={`cursor-pointer min-w-[40px]`} size="2xl" onClick={() => toggleSidebar()} />}
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
                <div className="menu_and_user flex flex-row items-center ">
                    {innerWidth >= breakpoint && (
                        <>
                            <nav className={`md:mr-4`}>
                                <ul className="flex flex-row space-x-6 font-medium tracking-wider">
                                    <li>
                                        <a href="/">{t("Home")}</a>
                                    </li>
                                    <li>
                                        <a href="/">{t("Explore")}</a>
                                    </li>
                                    <li>
                                        <a href="/">{t("Stats")}</a>
                                    </li>
                                    <li>
                                        <a href="/">{t("Resources")}</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex flex-row items-center space-x-4">
                                <div className="relative">
                                    <FontAwesomeIcon icon={faLanguage} size="xl" className="cursor-pointer" onClick={toggleLanguageDropdown} />
                                    {languageDropdown && <LanguageDropdown />}
                                </div>
                            </div>
                            {token !== null ? (
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
            <aside
                className={`fixed h-full ${isSidebarToggle ? " z-[999]" : "-z-[2]"} right-0 ${
                    isSidebarToggle ? "translate-x-0" : "-translate-x-full"
                }  bg-white py-6 px-10 w-full border-t shadow-custom2 transition-all top-[100px] duration-500 ease-in-out`}
            >
                <div className="relative h-full">
                    <nav>
                        <ul className="flex flex-col space-y-6 font-medium tracking-wider">
                            <li className="">
                                <a href="/">{t("Home")}</a>
                            </li>
                            <li>
                                <a href="/">{t("Explore")}</a>
                            </li>
                            <li>
                                <a href="/">{t("Stats")}</a>
                            </li>
                            <li>
                                <a href="/">{t("Resources")}</a>
                            </li>
                        </ul>
                    </nav>
                    {token !== null && (
                        <>
                            <hr className="mt-4" />
                            <div className="flex flex-row items-center space-x-4">
                                <div className="user block bg-slate-500 rounded-full w-10 h-10  cursor-pointer my-4 shadow-custom2"></div>
                                <h5 className="font-semibold">{currentUser?.name}</h5>
                            </div>
                        </>
                    )}
                    <hr />
                    <div>
                        <p className="mt-4" onClick={() => setShowLanguages(!showLanguages)}>
                            Switch language : <span className="font-extrabold text-lg">{lang === "en" ? "English" : "ไทย"}</span>
                        </p>
                        <div className={`${showLanguages ? "block" : "hidden"}`}>
                            <hr className="mt-4" />
                            <ul className="flex flex-col space-y-6 font-medium tracking-wider py-4 ">
                                <li>
                                    <h5 className={lang === "en" ? "text-black" : "text-gray-400"} onClick={() => changeLanguage("en")}>
                                        English
                                    </h5>
                                </li>
                                <li>
                                    <h5 className={lang === "th" ? "text-black" : "text-gray-400"} onClick={() => changeLanguage("th")}>
                                        ไทย
                                    </h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full absolute -translate-x-0 -translate-y-0 top-[calc(100%-180px)]">
                        <SignInButton width="w-full" />
                        <SignUpButton width="w-full" />
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;
