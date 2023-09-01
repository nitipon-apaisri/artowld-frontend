import UserSignIn from "../views/UserSignIn";

const RequireAuth: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
        return <UserSignIn />;
    }
    return children;
};

export default RequireAuth;
