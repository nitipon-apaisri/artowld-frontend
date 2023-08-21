import React from "react";
import { signInButtonProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const SignInButton: React.FC<signInButtonProps> = ({ width, px, py }) => {
    const { t } = useTranslation();
    return <button className={`sign_in_button ${width && width}  ${px ? px : "px-4"} ${py ? py : "py-3"}`}>{t("signIn")}</button>;
};

export default SignInButton;
