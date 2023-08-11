import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppLayout from "./layout/Layout.tsx";
import LandingPage from "./views/LandingPage.tsx";

const router = createBrowserRouter([{ path: "/", element: <LandingPage /> }]);
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AppLayout>
            <RouterProvider router={router} />
        </AppLayout>
    </React.StrictMode>
);
