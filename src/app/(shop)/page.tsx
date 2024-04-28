import { CategoryOptionsSlideshow, Title } from "@/components";

export default async function Home() {
  return (
    <>

      <CategoryOptionsSlideshow />

      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="px-1 mb-2"
      />

    </>
  );
}
