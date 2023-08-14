import { sampleCreators } from "../data/sample";

const TrendingCreators = () => {
    return (
        <div className="grid grid-cols-3 gap-6 mt-10">
            {sampleCreators
                .filter((_, index) => index < 3)
                .map((creator, i) => (
                    <div className="w-100 aspect-4/3 rounded-2xl border border-slate-300 relative hover:shadow-custom2 duration-500" key={`user-${i}`}>
                        <div className="w-full h-[60%] bg-slate-500 rounded-t-2xl"></div>
                        <div className="absolute -mr-[50%] left-2/4 -translate-x-1/2 top-[45%]">
                            <div className="w-[128px] aspect-square shadow-custom bg-slate-500 rounded-full outline outline-8 outline-white"></div>
                            <div className="text-center mt-6">
                                <h5 className="font-bold tracking-wider">{creator.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default TrendingCreators;
