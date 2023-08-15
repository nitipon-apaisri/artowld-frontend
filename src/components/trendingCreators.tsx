import { sampleCreators } from "../data/sample";
import CreatorCard from "./shareComponents/CreatorCard";

const TrendingCreators = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-10">
            {sampleCreators
                .filter((_, index) => index < 3)
                .map((creator, i) => (
                    <CreatorCard username={creator.name} key={`creator-${i}`} />
                ))}
        </div>
    );
};

export default TrendingCreators;
