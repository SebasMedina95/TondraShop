import { CategoryOptionsSlideshow, Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { initialData } from "@/seed/seed";

//SEED - Esto luego lo haremos con BD
const products = initialData.products;

export default async function Home() {
  return (
    <>

      <CategoryOptionsSlideshow />

      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="px-1 mb-2"
      />

      <ProductGrid products={ products } />

    </>
  );
}
