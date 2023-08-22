import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./layout/Layout.tsx";
import LandingPage from "./views/LandingPage.tsx";
import "./i18n.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { AppContxtProvider } from "./contexts/AppContext.tsx";
import UserRegisteration from "./views/UserRegistration.tsx";

const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/user/registration", element: <UserRegisteration /> },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AppContxtProvider>
            <UserContextProvider>
                <AppLayout>
                    <RouterProvider router={router} />
                </AppLayout>
            </UserContextProvider>
        </AppContxtProvider>
    </React.StrictMode>
);
