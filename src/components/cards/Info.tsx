import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export const Info = ({title, description, children}: InfoProps) => {
    return (
        <div className="group p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg 
                        hover:shadow-xl transition-shadow duration-300 relative overflow-hidden cursor-pointer">
        
            <div className="rounded-xl p-3 text-heading-1 w-max relative group-hover:scale-105 transition-transform duration-200">
                      {children}
            </div>

                <div className="mt-4 space-y-2">
                    <h2 className="text-heading-2 font-semibold md:text-xl"> {title} </h2>
                    <Paragraph>{description}</Paragraph>
                </div>
        </div>
    );
};