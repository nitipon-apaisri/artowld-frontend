import { useLocation, useNavigate } from "react-router-dom";
import UserSignIn from "../views/UserSignIn";
import { useEffect } from "react";

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const path = location.pathname.split("/");
    useEffect(() => {
        if (path[2] === "signin" && token) {
            navigate("/");
        }
    }, [path, navigate, token]);
    if (!token) {
        return <UserSignIn />;
    }
    return children;
};

export default RequireAuth;
