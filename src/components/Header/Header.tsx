import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { AppContextType } from "../../types/types";
import { AppContext } from "../../contexts/AppContext";
import Sidebar from "../Sidebar";
import Navigation from "./Navigation";

const Header = () => {
    const { isBreakpoint } = useContext(AppContext) as AppContextType;
    const [isSidebarToggle, setIsSidebarToggle] = useState<boolean>(false);

    const toggleSidebar = () => {
        setIsSidebarToggle(!isSidebarToggle);
        document.body.style.overflow = "hidden";
        if (isSidebarToggle) document.body.style.overflow = "auto";
    };

    useEffect(() => {
        if (!isBreakpoint) {
            setIsSidebarToggle(false);
        }
    }, [isBreakpoint]);
    return (
        <header>
            <div className={`app_header flex flex-row px-10 py-8 justify-between bg-white fixed w-full z-50 top-0`}>
                <div className="logo flex flex-row items-center space-x-4">
                    {isBreakpoint && <FontAwesomeIcon icon={isSidebarToggle ? faXmark : faBars} className={`cursor-pointer min-w-[40px]`} size="2xl" onClick={() => toggleSidebar()} />}
                    <img src={logo} alt="App-logo" />
                    <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                </div>
                {/* <div className="menu_and_user flex flex-row items-center ">
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
                </div> */}
                <Navigation />
            </div>
            <Sidebar isSidebarToggle={isSidebarToggle} />
        </header>
    );
};

export default Header;
