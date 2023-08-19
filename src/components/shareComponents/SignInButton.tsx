import React from "react";
import { signInButtonProps } from "../../types/types";

const SignInButton: React.FC<signInButtonProps> = ({ width, px, py }) => {
    return <button className={`${width && width} bg-primary text-white text-sm font-semibold antialiased tracking-wide ${px ? px : "px-4"} ${py ? py : "py-3"}  rounded-lg`}>Sign in</button>;
};

export default SignInButton;
