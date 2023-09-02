import { useTranslation } from "react-i18next";
import { sampleCollectedProducts } from "../data/sample";
import { productCardProps } from "../types/types";
import ProductCard from "../components/card/ProductCard";

const Marketplace = () => {
    const { t } = useTranslation();
    return (
        <main>
            <div className="wrapper">
                <section>
                    <div className="marketplace_header">
                        <h1>{t("marketplace")}</h1>
                    </div>
                    <div className="product_grid">
                        {sampleCollectedProducts.map((product: productCardProps, index: number) => (
                            <ProductCard product={product.product} key={index} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Marketplace;
