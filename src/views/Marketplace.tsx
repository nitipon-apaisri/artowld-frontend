import { useTranslation } from "react-i18next";

const Marketplace = () => {
    const { t } = useTranslation();
    return (
        <main>
            <div className="wrapper">
                <section>
                    <div className="marketplace_header">
                        <h1>{t("marketplace")}</h1>
                        <div></div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Marketplace;
