import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import CardOfTheDay from "../components/CardOfTheDay";
import TrendingCreators from "../components/TrendingCreators";
import TopCreators from "../components/TopCreators";
import RisingStars from "../components/RisingStar";

const LandingPage = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("title");
    }, [t]);

    return (
        <main className="mt-32">
            <div className="wrapper max-w-[1920px] min-h-screen mx-auto px-20">
                <article className="flex max-[959px]:flex-col flex-row justify-between items-center">
                    <section className="w-full 2xl:max-w-2xl max-[959px]:text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl w-full lg:max-w-lg 2xl:max-w-xl  ">{t("slogan")}</h1>
                        <p className="font-normal text-sm antialiased text-[#8E8E8E] mt-4 lg:mt-0">{t("subSlogan")}</p>
                        <button className="bg-primary text-white font-semibold antialiased tracking-wide px-8 py-4 rounded-lg mt-8 mx-auto lg:mx-0">{t("Explore")}</button>
                    </section>
                    <section className="relative mt-10">
                        <CardOfTheDay />
                    </section>
                </article>
                <article className="mt-24">
                    <h1 className="article_title">{t("trendingCreators")}</h1>
                    <section>
                        <TrendingCreators />
                    </section>
                </article>
                <article className="mt-24">
                    <h1 className="article_title">{t("topCreators")}</h1>
                    <section>
                        <TopCreators />
                    </section>
                </article>
                <article className="mt-24">
                    <h1 className="article_title">{t("risingStars")}</h1>
                    <section>
                        <RisingStars />
                    </section>
                </article>
            </div>
        </main>
    );
};

export default LandingPage;
