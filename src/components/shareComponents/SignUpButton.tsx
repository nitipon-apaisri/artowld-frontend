import React from "react";
import { signUpButtonProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const SignUpButton: React.FC<signUpButtonProps> = ({ width, px, py }) => {
    const { t } = useTranslation();
    return (
        <div>
            <button className={`sign_up_button ${width && width}  ${px ? px : "px-4"} ${py ? py : "py-3"}`}>{t("signUp")}</button>
        </div>
    );
};

export default SignUpButton;
