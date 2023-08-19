import { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./shareComponents/DropDown";
import { UserContext } from "../contexts/UserContext";
import { UserContextType } from "../types/types";
import SignInButton from "./shareComponents/SignInButton";
const Header = () => {
    const { t } = useTranslation();
    const { token } = useContext(UserContext) as UserContextType;
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [isSidebarToggle, setIsSidebarToggle] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
    const [currentLanguage, setCurrentLanguage] = useState<string>("en");
    const [showLanguages, setShowLanguages] = useState<boolean>(false);
    const { i18n } = useTranslation();

    const changeLanguage = (lang: string) => {
        const currentLanguage = i18n.language;
        setCurrentLanguage(currentLanguage);
        i18n.changeLanguage(lang);
        setShowLanguages(false);
    };
    const toggle = () => {
        setIsToggle(!isToggle);
    };
    const toggleSidebar = () => {
        setIsSidebarToggle(!isSidebarToggle);
        document.body.style.overflow = "hidden";
        if (isSidebarToggle) document.body.style.overflow = "auto";
    };

    useEffect(() => {
        const updateSize = () => {
            setInnerWidth(window.innerWidth);
            if (innerWidth > 768) {
                setIsSidebarToggle(false);
                setShowLanguages(false);
            }
        };
        window.addEventListener("resize", updateSize);
        updateSize();
    }, [isSidebarToggle, innerWidth]);

    return (
        <header>
            <div className={`app_header flex flex-row px-10 py-8 justify-between bg-white fixed w-full z-50 top-0`}>
                <div className="logo flex flex-row items-center space-x-4">
                    <FontAwesomeIcon icon={isSidebarToggle ? faXmark : faBars} className="block md:hidden  cursor-pointer min-w-[40px]" size="2xl" onClick={() => toggleSidebar()} />
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
                <div className="menu_and_user flex flex-row items-center ">
                    <nav className="max-md:hidden md:mr-4">
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
                    {token !== null ? (
                        <div className="relative">
                            <div className="user md:block hidden bg-slate-500 rounded-full w-10 h-10 ml-20 cursor-pointer" onClick={toggle}></div>
                            {isToggle && <DropDown />}
                        </div>
                    ) : (
                        <>{innerWidth > 768 && <SignInButton />}</>
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
                    <hr className="mt-4" />
                    <div className="flex flex-row items-center space-x-4">
                        <div className="user block bg-slate-500 rounded-full w-10 h-10  cursor-pointer my-4 shadow-custom2"></div>
                        <h5 className="font-semibold">Lorem Ipsun</h5>
                    </div>
                    <hr />
                    <div>
                        <p className="mt-4" onClick={() => setShowLanguages(!showLanguages)}>
                            Switch language : <b>{currentLanguage}</b>
                        </p>
                        <div className={`${showLanguages ? "block" : "hidden"}`}>
                            <hr className="mt-4" />
                            <ul className="flex flex-col space-y-6 font-medium tracking-wider py-4 ">
                                <li>
                                    <h5 onClick={() => changeLanguage("en")}>EN</h5>
                                </li>
                                <li>
                                    <h5 onClick={() => changeLanguage("th")}>TH</h5>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full absolute -translate-x-0 -translate-y-0 top-[calc(100%-160px)]">
                        <SignInButton width="w-full" />
                    </div>
                </div>
            </aside>
        </header>
    );
};

export default Header;
