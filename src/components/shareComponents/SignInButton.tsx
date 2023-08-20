import React from "react";
import { signInButtonProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const SignInButton: React.FC<signInButtonProps> = ({ width, px, py }) => {
    const { t } = useTranslation();
    return <button className={`${width && width} bg-primary text-white text-sm font-semibold antialiased tracking-wide ${px ? px : "px-4"} ${py ? py : "py-3"}  rounded-lg`}>{t("signIn")}</button>;
};

export default SignInButton;
