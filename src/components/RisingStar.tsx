import { sampleCreators } from "../data/sample";
import CreatorCard from "./shareComponents/CreatorCard";

const RisingStars = () => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-3 gap-6 mt-10">
                {sampleCreators
                    .filter((_, index) => index < 3)
                    .map((creator, i) => (
                        <CreatorCard username={creator.name} key={`creator-${i}`} />
                    ))}
            </div>
        </div>
    );
};

export default RisingStars;
