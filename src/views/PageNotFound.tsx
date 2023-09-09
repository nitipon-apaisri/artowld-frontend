import notFoundImage from "../assets/images/404.svg";
const PageNotFound = () => {
    return (
        <main>
            <div className="wrapper">
                <section>
                    <div className="page_not_found">
                        <div className="absolute -translate-x-1/2 translate-y-1/2 left-1/2 top-1/2 text-center">
                            <img src={notFoundImage} alt="404" className="w-96 mx-auto aspect-square" />
                            <a href="https://storyset.com/web" className="text-xs underline">
                                Web illustrations by Storyset
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PageNotFound;
