const Profile = () => {
    return (
        <main>
            <article className="profile relative">
                <div className="profile_banner"></div>
                <section>
                    <div className="wrapper">
                        <div className="profile_info flex space-x-20 -mt-16">
                            <div className="profile_media">
                                <div className="user_profile_image w-20 rounded-full  mx-auto aspect-square bg-slate-500 outline outline-8 outline-white"></div>
                                <h4 className="text-center text-xl mt-6 font-bold">John Doe</h4>
                            </div>
                            <div className="profile_bio w-full">
                                <div className="external_links flex bg-white space-x-4 py-4 px-8 rounded-[12px] shadow-custom2 justify-center items-center w-fit">
                                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                    <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default Profile;
