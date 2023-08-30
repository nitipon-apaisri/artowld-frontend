import { sampleCreators } from "../data/sample";
import CreatorCard from "./card/CreatorCard";

const RisingStars = () => {
    return (
        <div className="mt-10">
            <div className="w-full grid grid-flow-col overflow-auto gap-6 hide_scrollbar mt-10">
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
