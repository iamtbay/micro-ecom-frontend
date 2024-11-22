import CommentsSection from "./CommentsSection";
import ProductSection from "./ProductSection";

const ProductPage = () => {
  return (
    <main className="flex flex-col gap-12">
      <ProductSection />
      <CommentsSection />
    </main>
  );
};
export default ProductPage;
