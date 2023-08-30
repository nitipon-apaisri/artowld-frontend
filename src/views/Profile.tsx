import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import userTabs from "../modules/userTabs";
import capitalize from "../utils/capitalize";
import { AppContextType, UserContextType, UserType, productCardProps } from "../types/types";
import { AppContext } from "../contexts/AppContext";
import { UserContext } from "../contexts/UserContext";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/Card/ProductCard";
import { sampleProducts } from "../data/sample";
import { useParams } from "react-router-dom";
import Api from "../services/api";

const Profile = () => {
    const api = useMemo(() => new Api(), []);
    const { t } = useTranslation();
    const { isBreakpoint, lang } = useContext(AppContext) as AppContextType;
    const { currentUser } = useContext(UserContext) as UserContextType;
    const [activeTab, setActiveTab] = useState<number>(0);
    const [userProfile, setUserProfile] = useState<UserType | null>(null);
    const { userId } = useParams<{ userId: string }>();
    const getUserById = useCallback(
        async (id: string) => {
            const res = await api.getUserById(id).then((res) => {
                return res.data;
            });
            return res;
        },
        [api]
    );
    const ProfileBio = () => {
        return (
            <div className="profile_bio_content mt-10 max-h-20 overflow-auto no-scrollbar">
                <p className="text-slate-400 text-sm font-medium antialiased tracking-wide">
                    ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet
                    venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat
                </p>
            </div>
        );
    };
    const ExternalLinks = () => {
        return (
            <div className="external_links_wrapper flex justify-end">
                <div className="external_links ">
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                </div>
            </div>
        );
    };
    useEffect(() => {
        // Change active tab
        const tabs = document.querySelectorAll(".user_tab") as NodeListOf<HTMLElement>;
        const activedTab = document.querySelector(".activeTab") as HTMLElement;
        activedTab && activedTab.classList.remove("activeTab");
        tabs[activeTab].classList.add("activeTab");
    }, [activeTab]);
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
                                <ProfileBio />
                            </div>
                        </div>
                    </section>
                    <hr className={`${isBreakpoint ? "mt-6" : "mt-10"} mb-6`} />
                    <section>
                        <div className="flex justify-center space-x-4">
                            {userTabs.map((tab: string, index: number) => (
                                <span key={index} className={`user_tab tab${index} font-semibold antialiased tracking-wide text-slate-300 cursor-pointer`} onClick={() => setActiveTab(index)}>
                                    {lang === "en" ? capitalize(tab) : t(tab)}
                                </span>
                            ))}
                        </div>
                    </section>
                    <hr className="my-6 " />
                    <section>
                        <div className="product_grid">
                            {sampleProducts.map((product: productCardProps, index: number) => (
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
