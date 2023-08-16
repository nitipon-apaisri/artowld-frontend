import React, { useState } from "react";
import { layoutProps } from "../types/types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const AppLayout: React.FC<layoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            {isSidebarOpen && <Sidebar />}
            {children}
            <Footer />
        </>
    );
};

export default AppLayout;
