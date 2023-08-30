import { userBioProps } from "../../types/types";

const UserBio: React.FC<userBioProps> = ({ bio }) => {
    return (
        <div className="profile_bio_content mt-10 max-h-20 overflow-auto no-scrollbar">
            <p className="text-slate-400 text-sm font-medium antialiased tracking-wide">{bio}</p>
        </div>
    );
};

export default UserBio;
