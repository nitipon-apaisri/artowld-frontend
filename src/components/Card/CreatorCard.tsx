import React from "react";
import { creatorCardProps } from "../../types/types";

const CreatorCard: React.FC<creatorCardProps> = ({ username }) => {
    return (
        <div className="w-[280px] sm:w-[400px] min-[959px]:w-full aspect-square xl:aspect-4/3 rounded-2xl border border-slate-300 relative hover:shadow-custom2 duration-500">
            <div className="w-full h-[50%]  bg-slate-500 rounded-t-2xl"></div>
            <div className="absolute -mr-[50%] left-2/4 -translate-x-1/2 -translate-y-1/2 top-[calc(50%+24px)] xl:top-[calc(50%+32px)]">
                <div className="profile_image w-2/4  max-sm:w-24  sm:w-11/12 lg:w-24 2xl:w-32 mx-auto aspect-square bg-slate-500 outline outline-8 outline-white"></div>
                <div className="text-center mt-6 xl:mt-8">
                    <h5 className="font-bold tracking-wider text-lg lg:text-lg xl:text-xl 2xl:text-2xl">{username}</h5>
                </div>
            </div>
        </div>
    );
};

export default CreatorCard;
