// components/BusinessPartners/MaxHub/MaxHubProducts/MaxHubProducts.jsx
import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../../Header";
import Footer from "../../../Footer";
import PageHeader from "../../../Common/PageHeader";
import CategoryNav from "./CategoryNav";
import CategorySection from "./CategorySection";
import { categories } from "../../../../data/maxhubProducts";
import "./MaxHubProducts.css";

const MaxHubProducts = () => {
    const [activeCategory, setActiveCategory] = useState("interactive-flat-panel");

    return (
        <div className="maxhub-products-page">
            <Header />
            <PageHeader
                title="MAXHUB Products"
                breadcrumb={[
                    { title: "Home", url: "/" },
                    { title: "MAXHUB", url: "/maxhub" },
                    { title: "Products", url: "/maxhub/products" }
                ]}
            />

            <div className="maxhub-products-container">
                {/* Remove Container wrapper here */}
                <CategoryNav
                    categories={categories}
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                />

                <div className="maxhub-category-content">
                    <Container>
                        {categories.map((category) => (
                            <CategorySection
                                key={category.id}
                                category={category}
                                isActive={activeCategory === category.id}
                            />
                        ))}
                    </Container>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default MaxHubProducts;
