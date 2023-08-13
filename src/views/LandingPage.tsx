import { useTranslation } from "react-i18next";

const LandingPage = () => {
    const { t } = useTranslation();
    return (
        <main>
            <div className="wrapper max-w-[1920px] min-h-screen mx-auto px-20">
                <article>
                    <section className="max-w-2xl">
                        <h1 className="text-4xl font-bold leading-normal antialiased max-w-xl">{t("slogan")}</h1>
                        <p className="font-normal text-sm antialiased text-[#8E8E8E]">{t("subSlogan")}</p>
                    </section>
                </article>
            </div>
        </main>
    );
};

export default LandingPage;
