import { titleFont } from "@/config/fonts";

export default function Home() {
  return (
    <div className="">
      <h1>Hola Mundo 1</h1>
      <h1 className={ titleFont.className }>Hola Mundo 2</h1>
    </div>
  );
}
