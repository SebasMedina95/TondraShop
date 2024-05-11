import { CategoryOptionsSlideshow, Title } from "@/components";
import { ProductGrid } from "@/components/products/product-grid/ProductGrid";
import { ValidGender } from "@/interfaces/product.interface";
import { initialData } from "@/seed/seed";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

interface IProps {
  params: {
    gender: ValidGender, //Category
  },
  searchParams: {
    page?: string;
  }
}

//Extracción y generación de metadata apoyandonos de las props que obtenemos
export async function generateMetadata({ params }: IProps, parent: ResolvingMetadata): Promise<Metadata> {

  let myTitle: string = "";
  let myDescription: string = "";
  const gender = params.gender
  
  switch(gender){
    case "men": 
      myTitle = "Hombres";
      myDescription = "Categoría para Hombres"
    break;
    case "women": 
      myTitle = "Mujeres";
      myDescription = "Categoría para Mujeres"
    break;
    case "kid": 
      myTitle = "Niños";
      myDescription = "Categoría para Niños"
    break;
    case "unisex": 
      myTitle = "Mixta";
      myDescription = "Categoría Mixta"
    break;
    default: 
      notFound();
  }
 
  return {
    title: myTitle ?? "Producto no encontrado",
    description: myDescription ?? "Producto no encontrado",
    openGraph: {
      title: myTitle ?? "Producto no encontrado",
      description: myDescription ?? "Producto no encontrado"
    },
  }
}


export default async function CategoryPage({ params, searchParams }: IProps) {

  const { gender } = params;

  //SEED - Esto luego lo haremos con BD
  const products = initialData.products.filter( f => f.gender == gender );
  
  let genderSelect: string = "";
  let genderComplement: string = "";

  switch( gender ){
    case "men": 
      genderSelect = "Todos los Artículos de Hombres";
      genderComplement = "Hombres"
    break;
    case "women": 
      genderSelect = "Todos los Artículos de Mujeres";
      genderComplement = "Mujeres"
    break;
    case "kid": 
      genderSelect = "Todos los Artículos de Niños";
      genderComplement = "Niños"
    break;
    case "unisex": 
      genderSelect = "Todos los Artículos Multi Genero";
      genderComplement = "Unisex"
    break;
    default: 
      notFound() //Función especial de NextJS.
  }

  

  return (
    <>
      
      <CategoryOptionsSlideshow />

      <Title 
        title={ `Tienda - ${genderComplement}` }
        subtitle={ genderSelect }
        className="px-1 mb-2"
      />

      <ProductGrid products={ products} />

      {/* <Pagination totalPages={ totalPages } /> */}
      
    </>
  );
}