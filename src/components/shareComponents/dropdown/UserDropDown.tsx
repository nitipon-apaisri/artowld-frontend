// import { dropdownProps } from "../../types/types";

import { useTranslation } from "react-i18next";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { UserContextType } from "../../../types/types";
const UserDropDown = () => {
    const { t } = useTranslation();
    const { signOut } = useContext(UserContext) as UserContextType;

    return (
        <div className="dropdown w-44">
            <ul className="py-2 text-s text-black divide-y divide-gray-100">
                <li>
                    <a href="/user/profile">{t("profile")}</a>
                </li>
                <li>
                    <a onClick={signOut}>{t("signOut")}</a>
                </li>
            </ul>
        </div>
    );
};

export default UserDropDown;
