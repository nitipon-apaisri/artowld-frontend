import logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <header>
            <div className="app_header">
                <div className="logo">
                    <img src={logo} alt="App-logo" />
                </div>
                <div className="menu_and_user">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="user"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;
