import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AppLayout from "./layout/Layout.tsx";
import LandingPage from "./views/LandingPage.tsx";
import "./i18n.tsx";
import { UserContextProvider } from "./contexts/UserContext.tsx";
import { AppContxtProvider } from "./contexts/AppContext.tsx";
import UserRegisteration from "./views/UserRegistration.tsx";
import UserSignIn from "./views/UserSignIn.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContxtProvider>
                <UserContextProvider>
                    <AppLayout>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/user/registration" element={<UserRegisteration />} />
                            <Route path="/user/signin" element={<UserSignIn />} />
                        </Routes>
                    </AppLayout>
                </UserContextProvider>
            </AppContxtProvider>
        </BrowserRouter>
    </React.StrictMode>
);
