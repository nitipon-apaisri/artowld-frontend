import React from "react";
import { layoutProps } from "../types/types";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const AppLayout: React.FC<layoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
