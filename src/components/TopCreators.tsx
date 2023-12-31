import { sampleCreators } from "../data/sample";

const TopCreators = () => {
    return (
        <div className="mt-10 max-h-[560px] overflow-y-scroll hide_scrollbar">
            <div className="grid grid-rows-3 grid-flow-row min-[959px]:grid-flow-col gap-8">
                {sampleCreators
                    .sort((a, b) => (a.totalSales < b.totalSales ? 1 : -1))
                    .map((creator, i) => (
                        <div className="pb-6 pl-4 border-b border-slate-300 " key={`creator-${i}`}>
                            <div className=" flex items-center ">
                                <h5>{i + 1}</h5>
                                <div className="profile_image w-16 h-16 bg-slate-500 ml-6"></div>

                                <div className="ml-4">
                                    <h5 className="text-sm xl:text-base">Lorem Ipsum</h5>
                                    <p className="font-medium text-xs xl:font-semibold xl:text-sm antialiased text-[#AEAEAE]">Total sales: {creator.totalSales}</p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default TopCreators;
