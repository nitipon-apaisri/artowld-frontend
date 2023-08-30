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
                <Navigation />
            </div>
            <Sidebar isSidebarToggle={isSidebarToggle} />
        </header>
    );
};

export default Header;
