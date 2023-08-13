import logo from "../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
const Header = () => {
    const { t } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <header>
            <div className="app_header flex flex-row p-10 justify-between">
                <div className="logo flex flex-row items-center space-x-4">
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
                <div className="menu_and_user flex flex-row items-center">
                    <nav>
                        <ul className="flex flex-row space-x-6">
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
                    <div className="user bg-slate-500 rounded-full w-10 h-10 ml-20" onClick={() => changeLanguage("th")}></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
