import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardOfDay from "../components/CardOfDay";

const LandingPage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = t("title");
    }, [t]);
    return (
        <main className="my-10">
            <div className="wrapper max-w-[1920px] min-h-screen mx-auto px-20">
                <article className="flex flex-row justify-between items-center">
                    <section className="max-w-2xl">
                        <h1 className="text-4xl font-bold leading-normal antialiased max-w-xl">{t("slogan")}</h1>
                        <p className="font-normal text-sm antialiased text-[#8E8E8E]">{t("subSlogan")}</p>
                        <button className="bg-primary text-white font-semibold antialiased tracking-wide px-8 py-2 rounded-lg mt-8">{t("Explore")}</button>
                    </section>
                    <section>
                        <CardOfDay />
                    </section>
                </article>
            </div>
        </main>
    );
};

export default LandingPage;
