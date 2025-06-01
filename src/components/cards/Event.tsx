import { Paragraph } from "../shared/Paragraph";


interface EventProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}


export const Event = ({title, description, icon, image}: EventProps) => {

    return(
        <div className="p-5 lg:p-8 rounded-3xl bg-box-bg shadow-md hover:shadow-xl hover:scale-[1.02]
                        transition-all duration-300 ease-in-out cursor-pointer relative overflow-hidden">
           <img src = {image} alt={title} className="w-full h-56 object-cover rounded-t-2xl" />
           <div className="mt-4 w-max text-heading-1"> {icon} </div>
           <div className="mt-4 space-y-2">
              <h2 className="text-lg md:text-xl font-semibold text-heading-2"> {title} </h2>
              <Paragraph> {description} </Paragraph>
           </div>
        </div>
    );
};