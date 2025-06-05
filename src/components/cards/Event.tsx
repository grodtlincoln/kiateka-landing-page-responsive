import { FaArrowRight } from "react-icons/fa";
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


        <div  className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">

                <div className="text-heading-1 text-3xl"> 
                 {icon} 
                </div>

               <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-semibold text-heading-2 underline"> {title} </h2>
                     <Paragraph> {description} </Paragraph>
               </div>
               </div>      

                <div className="flex justify-center pr-6 text-green-700">
                    <div className="flex items-center gap-6 group-hover:text-primary transition-all duration-300">
                        <span className="mt-3 text-sm text-green-700 font-bold underline">View Details</span>
                        <FaArrowRight className="mt-3 group-hover:translate-x-1 transition-transform duration-300"/>
                    </div>
                </div>
           </div>

        
    );
};