import React, { useContext, useEffect, useState } from "react";
import { AppContextType, UserContextType, sidebarProps } from "../types/types";
import nav from "../modules/nav";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useTranslation } from "react-i18next";
import { AppContext } from "../contexts/AppContext";
import SignInButton from "./shareComponents/button/SignInButton";
import SignUpButton from "./shareComponents/button/SignUpButton";

const Sidebar: React.FC<sidebarProps> = ({ isSidebarToggle }) => {
    const { currentUser } = useContext(UserContext) as UserContextType;
    const { lang, changeLanguage } = useContext(AppContext) as AppContextType;
    const { t } = useTranslation();
    const [showLanguages, setShowLanguages] = useState<boolean>(false);

    useEffect(() => {
        if (isSidebarToggle) setShowLanguages(false);
    }, [isSidebarToggle]);

    return (
        <aside
            className={`fixed h-full ${isSidebarToggle ? " z-[999]" : "-z-[2]"} right-0 ${
                isSidebarToggle ? "translate-x-0" : "-translate-x-full"
            }  bg-white py-6 px-10 w-full border-t shadow-custom2 transition-all top-[100px] duration-500 ease-in-out`}
        >
            <div className="relative h-full">
                <nav>
                    <ul className="flex flex-col space-y-6 font-medium tracking-wider">
                        {nav.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>{t(item.name)}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                {currentUser !== null && (
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
    );
};

export default Sidebar;
