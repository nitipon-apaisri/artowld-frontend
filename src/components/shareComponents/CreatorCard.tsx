import React from "react";
import { creatorCardProps } from "../../types/types";

const CreatorCard: React.FC<creatorCardProps> = ({ username }) => {
    return (
        <div className="max-[959px]:w-[calc(50%-24px)] aspect-square xl:aspect-4/3 rounded-2xl border border-slate-300 relative hover:shadow-custom2 duration-500">
            <div className="w-full h-[50%]  bg-slate-500 rounded-t-2xl"></div>
            <div className="absolute -mr-[50%] left-2/4 -translate-x-1/2 -translate-y-1/2 top-[calc(50%+24px)] xl:top-[calc(50%+32px)]">
                <div className="profile_image w-2/4 sm:w-4/5 lg:w-24 2xl:w-32 mx-auto aspect-square bg-slate-500 outline outline-8 outline-white"></div>
                <div className="text-center mt-6 xl:mt-8">
                    <h5 className="font-bold tracking-wider text-lg lg:text-lg xl:text-xl 2xl:text-2xl">{username}</h5>
                </div>
            </div>
        </div>
    );
};

export default CreatorCard;
