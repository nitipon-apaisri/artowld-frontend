import React from "react";
import { layoutProps } from "../types/types";
import Header from "../components/Header";
import Footer from "./Footer";

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
