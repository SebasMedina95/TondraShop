import { titleFont } from "@/config/fonts";

export const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center text-xs mb-10">
        <div className="">
            <div className="flex justify-center text-center items-center">
                <span className={ `${ titleFont.className } antialiased font-bold` }>Tondra</span><span className="ml-1"> | Shop</span>
            </div>
            <div className="flex justify-center text-center items-center">
                <span className="font-bold">Desarrollado por: </span>
                <br />
                <a target="_blank" className="hover:underline hover:text-blue-600 ml-1" href="https://www.linkedin.com/in/juan-sebastian-medina-toro-887491249/">
                    Juan Sebastian Medina Toro
                </a>
            </div>
            <div className="flex justify-center text-center items-center">
                <span>Copyright © { new Date().getFullYear() } - Todos los derechos reservados. </span>
            </div>
        </div>
    </div>
  )
}
