import React from "react";
import { creatorCardProps } from "../types/types";

const CreatorCard: React.FC<creatorCardProps> = ({ username }) => {
    return (
        <div className="w-100 aspect-4/3 rounded-2xl border border-slate-300 relative hover:shadow-custom2 duration-500">
            <div className="w-full h-[60%] bg-slate-500 rounded-t-2xl"></div>
            <div className="absolute -mr-[50%] left-2/4 -translate-x-1/2 top-[45%]">
                <div className="profile_image w-[128px] aspect-square bg-slate-500 outline outline-8 outline-white"></div>
                <div className="text-center mt-6">
                    <h5 className="font-bold tracking-wider">{username}</h5>
                </div>
            </div>
        </div>
    );
};

export default CreatorCard;
