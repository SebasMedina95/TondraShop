export const revalidate = 60; //Cada 60 segundos
import { initialData } from "@/seed/seed";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

import { ProductMobileSlideshow,
         ProductSlideshow, 
         StockPriceLabel} from "@/components";
import { titleFont } from "@/config/fonts";
import { AddToCart } from "./ui/AddToCart";

interface IProps {
  params: {
    slug: string;
  }
}

//SEED - Esto luego lo haremos con BD
const products = initialData.products;

export async function generateMetadata({ params }: IProps, parent: ResolvingMetadata): Promise<Metadata> {

  const slug = params.slug
  // const product = await getProductBySlug(slug)
  const product = products.find( prod => prod.slug == slug );
 
  return {
    title: product?.title ?? "Producto no encontrado",
    description: product?.description ?? "Producto no encontrado",
    openGraph: {
      title: product?.title ?? "Producto no encontrado",
      description: product?.description ?? "Producto no encontrado",
      images: [`/products/${ product?.images[1] }`]
    },
  }
}

export default function ProductPage({ params }: IProps) {

  const { slug } = params;
  // const product = await getProductBySlug( slug );
  const product = products.find( prod => prod.slug == slug );
  if( !product ) notFound();

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-3">
      
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">

        {/* Este es el de Movile  */}
        <ProductMobileSlideshow 
          title={ product.title } 
          images={ product.images }
          className="block md:hidden" //Con esto para controlar cuando aparece
        />

        {/* Este es el de Escritorio */}
        <ProductSlideshow 
          title={ product.title } 
          images={ product.images } 
          className="hidden md:block" //Con esto para controlar cuando aparece
        />

      </div>

      {/* Detalles del Producto */}
      <div className="mt-2 col-span-1 md:col-span-2 px-5">

        <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl` }> 
          {product.title} 
        </h1>

        <hr className="bg-gray-500" />

        {/* Stock y Precio que se pre carga y actualiza */}
        <StockPriceLabel slug={ product.slug } />

        {/* Para agregar en el carrito / parte cliente */}
        <AddToCart product={ product } />

        {/* Descripción del producto */}
        <h3 className="font-bold text-xl">
          Descripción:
        </h3>
        <p className="mt-1 text-md md:text-xl font-light text-justify">
          { product.description }
        </p>

      </div>
      
    </div>
  );
}