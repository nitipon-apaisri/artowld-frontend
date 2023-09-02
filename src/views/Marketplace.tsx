import { useTranslation } from "react-i18next";
import { sampleCollectedProducts } from "../data/sample";
import { productCardProps } from "../types/types";
import ProductCard from "../components/card/ProductCard";
import { useState } from "react";
import Loader from "../components/shareComponents/Loader";

const Marketplace = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState<boolean>(true);
    setTimeout(() => {
        setLoading(false);
    }, 300);
    return (
        <main>
            <div className="wrapper">
                <section>
                    <div className="marketplace_header">
                        <h1>{t("marketplace")}</h1>
                    </div>
                    {loading ? (
                        <Loader />
                    ) : (
                        <div className="product_grid">
                            {sampleCollectedProducts.map((product: productCardProps, index: number) => (
                                <ProductCard product={product.product} key={index} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Marketplace;
