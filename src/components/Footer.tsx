import logo from "../assets/images/logo.svg";
const Footer = () => {
    return (
        <footer className="mt-40">
            <div className="footer p-10 bg-[#FAFAFA]">
                <div className="flex flex-col md:flex-row justify-between items-center ">
                    <div className="logo flex flex-row items-center space-x-4">
                        <img src={logo} alt="App-logo" />
                        <h1 className="font-bold tracking-wider">ARTOWLD</h1>
                    </div>
                    <h5 className="mt-4 md:mt-0">Developed by Unagi Studio</h5>
                    <div></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
