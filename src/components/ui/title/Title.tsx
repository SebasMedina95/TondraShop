import { titleFont } from "@/config/fonts";

interface IProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export const Title = ({ title, subtitle, className }: IProps) => {
  return (
    <div className={ `mt-3 ${ className }` }>
      <h1 className={ `${ titleFont.className } ml-2 antialiased text-4xl font-semibold my-10` }>
        { title }
      </h1>

        {
            subtitle && (
                <h3 className="text-xl ml-3 mb-5 -mt-8">{ subtitle }</h3>
            )
        }

    </div>
  )
}