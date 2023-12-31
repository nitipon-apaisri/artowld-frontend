import React from "react";
import { productCardProps } from "../../types/types";
import { useTranslation } from "react-i18next";

const ProductCard: React.FC<productCardProps> = ({ creator, title, price }) => {
    const { t } = useTranslation();
    return (
        <div className="product_card_wrapper p-4 border border-[#EBEBEB] rounded-2xl">
            <div className="max-w-full aspect-square bg-slate-500 rounded-2xl"></div>
            <div className="product_card_info mt-4 bg-[#F9F9F9] px-6 py-4 rounded-2xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs ">{creator}</p>
                        <h5 className="text-sm font-semibold">{title}</h5>
                    </div>
                    <div>
                        <p className="text-sm">{t("price")}</p>
                        <h5 className="text-sm font-semibold text-right">{price} THB</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
