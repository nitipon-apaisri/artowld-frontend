import { externalLinkProps } from "../../types/types";

const ExternalLinks: React.FC<externalLinkProps> = () => {
    return (
        <div className="external_links_wrapper flex justify-end">
            <div className="external_links ">
                <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
                <div className="w-8 aspect-square bg-slate-400 rounded-full"></div>
            </div>
        </div>
    );
};

export default ExternalLinks;
