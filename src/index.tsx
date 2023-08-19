import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./layout/Layout.tsx";
import LandingPage from "./views/LandingPage.tsx";
import "./i18n.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";

const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <UserContextProvider>
            <AppLayout>
                <RouterProvider router={router} />
            </AppLayout>
        </UserContextProvider>
    </React.StrictMode>
);
