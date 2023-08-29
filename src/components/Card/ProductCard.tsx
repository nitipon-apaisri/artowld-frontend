import React from "react";
import { productCardProps } from "../../types/types";

const ProductCard: React.FC<productCardProps> = ({ product }) => {
    return (
        <div className="product_card_wrapper p-4 border border-[#EBEBEB] rounded-2xl">
            <div className="max-w-full aspect-square bg-slate-500 rounded-2xl"></div>
            <div className="product_card_info mt-4 bg-[#F9F9F9] px-6 py-4 rounded-2xl">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs ">{product.creator}</p>
                        <h5 className="text-sm font-semibold">{product.title}</h5>
                    </div>
                    <div>
                        <p>Price</p>
                        <h5 className="text-sm font-semibold text-right">{product.price} THB</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
