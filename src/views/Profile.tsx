const Profile = () => {
    return (
        <main>
            <article className="profile relative">
                <div className="profile_banner"></div>
                <section>
                    <div className="wrapper">
                        <div className="profile_info">
                            <div className="profile_media">
                                <div className="profile_image "></div>
                                <h4 className="text-center text-xl mt-8 font-bold">John Doe</h4>
                            </div>
                            <div className="profile_bio">
                                <div className="flex justify-end">
                                    <div className="external_links ">
                                        <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                        <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                        <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="profile_bio_content mt-10">
                                    <p className="text-slate-400 font-medium antialiased tracking-wide">
                                        ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque
                                        dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in
                                        pellentesque massa placerat
                                    </p>
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
