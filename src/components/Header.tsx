import { useState } from "react";
import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import DropDown from "./shareComponents/DropDown";
const Header = () => {
    const { t } = useTranslation();
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const toggle = () => {
        setIsToggle(!isToggle);
    };
    return (
        <header>
            <div className="app_header flex flex-row p-10 justify-between">
                <div className="logo flex flex-row items-center space-x-4">
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
                <div className="menu_and_user flex flex-row items-center">
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
                        <FontAwesomeIcon icon={faBars} className="block md:hidden ml-20 cursor-pointer" size="2xl" />
                        <div className="user md:block hidden bg-slate-500 rounded-full w-10 h-10 ml-20 cursor-pointer" onClick={toggle}></div>
                        {isToggle && <DropDown />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
