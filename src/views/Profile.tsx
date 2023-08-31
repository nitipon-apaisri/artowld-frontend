import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import userTabs from "../modules/userTabs";
import capitalize from "../utils/capitalize";
import { AppContextType, UserContextType, UserType, productCardProps } from "../types/types";
import { AppContext } from "../contexts/AppContext";
import { UserContext } from "../contexts/UserContext";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/card/ProductCard";
import { bio, sampleCollectedProducts, sampleProducts } from "../data/sample";
import { useLocation, useParams } from "react-router-dom";
import Api from "../services/api";
import UserBio from "../components/profile/UserBio";
import ExternalLinks from "../components/profile/ExternalLinks";
import { Link } from "react-router-dom";

const Profile = () => {
    const { userId } = useParams<{ userId: string }>();
    const location = useLocation();
    const api = useMemo(() => new Api(), []);
    const { t } = useTranslation();

    const { isBreakpoint, lang } = useContext(AppContext) as AppContextType;
    const { currentUser } = useContext(UserContext) as UserContextType;
    const [userProfile, setUserProfile] = useState<UserType | null>(null);
    const [products, setProducts] = useState<productCardProps[]>([]);

    const getUserById = useCallback(
        async (id: string) => {
            const res = await api.getUserById(id).then((res) => {
                return res.data;
            });
            return res;
        },
        [api]
    );
    const changeTab = (tabIndex: number) => {
        const tabs = document.querySelectorAll(".user_tab") as NodeListOf<HTMLElement>;
        const activedTab = document.querySelector(".activeTab") as HTMLElement;
        activedTab && activedTab.classList.remove("activeTab");
        tabs[tabIndex].classList.add("activeTab");
    };
    useEffect(() => {
        // Change active tab
        const tabIndex = userTabs.findIndex((tab) => tab === location.pathname.split("/")[3]);
        changeTab(tabIndex);
        switch (true) {
            case tabIndex === 0:
                setProducts(sampleProducts);
                break;
            case tabIndex === 1:
                setProducts(sampleCollectedProducts);
                break;
            case tabIndex === 2:
                setProducts(sampleProducts);
                break;
            default:
        }
    }, [location]);

    useEffect(() => {
        const getUser = async () => {
            const res = await getUserById(userId as string);
            setUserProfile(res as UserType);
        };
        if (userId !== undefined) {
            getUser();
        } else {
            setUserProfile(currentUser);
        }
    }, [currentUser, userId, getUserById]);

    return (
        <main>
            <article className="profile relative">
                <div className="profile_banner"></div>
                <div className="wrapper">
                    <section>
                        <div className="profile_info">
                            <div className="profile_media">
                                <div className="profile_image"></div>
                                <h4 className="text-center text-xl mt-8 font-bold">{userProfile?.name}</h4>
                            </div>
                            <div className="profile_bio">
                                <ExternalLinks />
                                <UserBio bio={bio} />
                            </div>
                        </div>
                    </section>
                    <hr className={`${isBreakpoint ? "mt-6" : "mt-10"} mb-6`} />
                    <section>
                        <div className="flex justify-center space-x-4">
                            {userTabs.map((tab: string, index: number) => (
                                <span key={index} className={`user_tab tab${index} font-semibold antialiased tracking-wide text-slate-300 cursor-pointer`} onClick={() => changeTab(index)}>
                                    <Link to={`/user/profile/${tab}`}>{lang === "en" ? capitalize(tab) : t(tab)}</Link>
                                </span>
                            ))}
                        </div>
                    </section>
                    <hr className="my-6 " />
                    <section>
                        <div className="product_grid">
                            {products.map((product: productCardProps, index: number) => (
                                <ProductCard product={product.product} key={index} />
                            ))}
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
};

export default Profile;
