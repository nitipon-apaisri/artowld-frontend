import { useEffect, useState } from "react";
import userTabs from "../modules/userTabs";
import capitalize from "../utils/capitalize";

const Profile = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [previusTab, setPreviusTab] = useState<number>(0);
    const toggleTab = (tab: number) => {
        setPreviusTab(activeTab);
        setActiveTab(tab);
    };
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
            <div className="flex justify-end">
                <div className="external_links ">
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                </div>
            </div>
        );
    };
    useEffect(() => {
        const tab = document.querySelector(`.tab${activeTab}`) as HTMLElement;
        tab.classList.add("activeTab");
        if (previusTab !== activeTab) {
            const prevTab = document.querySelector(`.tab${previusTab}`) as HTMLElement;
            previusTab !== 0 && prevTab.classList.remove("activeTab");
        }
    }, [activeTab, previusTab]);
    return (
        <main>
            <article className="profile relative">
                <div className="profile_banner"></div>
                <div className="wrapper">
                    <section>
                        <div className="profile_info">
                            <div className="profile_media max-[1366px]:mt-10    ">
                                <div className="profile_image w-60 max-[1366px]:w-40 rounded-full  mx-auto aspect-square bg-slate-500 outline outline-[10px] outline-white"></div>
                                <h4 className="text-center text-xl mt-8 font-bold">John Doe</h4>
                            </div>
                            <div className="profile_bio">
                                <ExternalLinks />
                                <ProfileBio />
                            </div>
                        </div>
                    </section>
                    <hr className="mt-10 mb-6" />
                    <section>
                        <div className="flex justify-center space-x-4">
                            {userTabs.map((tab, index) => (
                                <span key={index} className={`tab${index + 1} font-semibold antialiased tracking-wide text-slate-300 cursor-pointer`} onClick={() => toggleTab(index + 1)}>
                                    {capitalize(tab)}
                                </span>
                            ))}
                        </div>
                    </section>
                    <hr className="mt-6 " />
                </div>
            </article>
        </main>
    );
};

export default Profile;
