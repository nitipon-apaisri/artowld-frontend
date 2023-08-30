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
import { RouterType } from "./types/types.ts";
import Profile from "./views/Profile.tsx";

const routers: RouterType[] = [
    { path: "/", element: <LandingPage /> },
    { path: "/user/registration", element: <UserRegisteration /> },
    { path: "/user/signin", element: <UserSignIn /> },
    { path: "/user/profile", element: <Profile /> },
    { path: "/user/profile/created", element: <Profile /> },
    { path: "/user/profile/collected", element: <Profile /> },
    { path: "/user/profile/favorite", element: <Profile /> },
    { path: "/:userId/profile", element: <Profile /> },
    { path: "/:userId/profile/created", element: <Profile /> },
    { path: "/:userId/profile/collected", element: <Profile /> },
    { path: "/:userId/profile/favorite", element: <Profile /> },
];
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContxtProvider>
                <UserContextProvider>
                    <AppLayout>
                        <Routes>
                            {routers.map((router, index) => (
                                <Route key={index} path={router.path} element={router.element} />
                            ))}
                        </Routes>
                    </AppLayout>
                </UserContextProvider>
            </AppContxtProvider>
        </BrowserRouter>
    </React.StrictMode>
);
