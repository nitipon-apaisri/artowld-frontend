import { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./shareComponents/DropDown";
const Header = () => {
    const { t } = useTranslation();
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const [isSidebarToggle, setIsSidebarToggle] = useState<boolean>(false);
    const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

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
            if (innerWidth > 768) setIsSidebarToggle(false);
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
                    <nav className="max-md:hidden">
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

                    <div className="relative">
                        <div className="user md:block hidden bg-slate-500 rounded-full w-10 h-10 ml-20 cursor-pointer" onClick={toggle}></div>
                        {isToggle && <DropDown />}
                    </div>
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
                    <button className="w-full absolute -translate-x-0 -translate-y-0 top-[calc(100%-160px)] bg-primary text-white font-semibold antialiased tracking-wide px-8 py-2 rounded-lg">
                        Sign in
                    </button>
                </div>
            </aside>
        </header>
    );
};

export default Header;
