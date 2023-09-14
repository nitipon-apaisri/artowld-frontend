import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import userTabs from "../modules/userTabs";
import capitalize from "../utils/capitalize";
import { AppContextType, UserContextType, UserType, productCardProps } from "../types/types";
import { AppContext } from "../contexts/AppContext";
import { UserContext } from "../contexts/UserContext";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/card/ProductCard";
import { bio, sampleCollectedProducts, sampleProducts } from "../data/sample";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Api from "../services/api";
import UserBio from "../components/profile/UserBio";
import ExternalLinks from "../components/profile/ExternalLinks";
import { Link } from "react-router-dom";
import Loader from "../components/shareComponents/Loader";

const Profile = () => {
    const { userId } = useParams<{ userId: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const api = useMemo(() => new Api(), []);
    const { t } = useTranslation();
    const { isBreakpoint, lang } = useContext(AppContext) as AppContextType;
    const { currentUser } = useContext(UserContext) as UserContextType;
    const [userProfile, setUserProfile] = useState<UserType | null>(null);
    const [products, setProducts] = useState<productCardProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const getUserById = useCallback(
        async (id: string) => {
            const res = await api
                .getUserById(id)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    console.log(err);
                    return null;
                });
            return res;
        },
        [api]
    );
    const loadProducts = useCallback((tabIndex: number) => {
        switch (true) {
            case tabIndex === 0:
                setProducts(sampleProducts);
                hideLoader();
                break;
            case tabIndex === 1:
                setProducts(sampleCollectedProducts);
                hideLoader();
                break;
            case tabIndex === 2:
                setProducts(sampleProducts);
                hideLoader();
                break;
            default:
        }
    }, []);
    const changeTab = useCallback(
        (tabIndex: number) => {
            const tabs = document.querySelectorAll(".user_tab") as NodeListOf<HTMLElement>;
            const activedTab = document.querySelector(".activeTab") as HTMLElement;
            activedTab && activedTab.classList.remove("activeTab");
            tabs[tabIndex].classList.add("activeTab");
            setLoading(true);
            loadProducts(tabIndex);
        },
        [loadProducts]
    );
    const hideLoader = () => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };
    useEffect(() => {
        const initialTab = () => {
            const tabIndex = userTabs.findIndex((tab) => tab === location.pathname.split("/")[3]);
            if (tabIndex === -1) {
                changeTab(0);
            } else {
                changeTab(tabIndex);
            }
        };
        const getUser = async () => {
            const res = await getUserById(userId as string);
            setUserProfile(res as UserType);
        };
        if (userId !== undefined) {
            getUser();
            initialTab();
        } else {
            setUserProfile(currentUser);
            initialTab();
        }
    }, [currentUser, userId, getUserById, location, loadProducts, changeTab, navigate]);

    return (
        <main>
            <article className="profile relative">
                <div className="profile_banner"></div>
                <div className="wrapper">
                    <section>
                        <div className="profile_info">
                            <div className="profile_media">
                                <div className="user_profile_image"></div>
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
                        <div className="min-h-[800px] relative">
                            {loading ? (
                                <Loader />
                            ) : (
                                <div className="product_grid">
                                    {products.map((product: productCardProps, index: number) => (
                                        <ProductCard creator={product.creator} title={product.title} price={product.price} key={index} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </article>
        </main>
    );
};

export default Profile;
