import { Container } from "../shared/Container";


const logos = ["fuoye", "gdscEK", "gdscOYE", "mlsa", "sca", "wiki"];

export const Brands = () => {
    return (
        <section className="mt-5 xl:mt-4"> 
            <Container className="space-y-10"> 

                  {/* Section Heading */}
                <div className="text-center">
                   <h2 className="text-lg font-bold tracking-wide text-gray-500 uppercase"> PARTNERED BY </h2>
                </div>

                        {/* Logo Grid */}
                <div className="flex flex-wrap justify-ccenter gap-6 sm:gap-8 md:gap-10 items-center ">
                    {logos.map((logo, key) => (
                    <div key={key} className="p-3 sm:p-4 rounded-xl shadow-sm transition-transform duration-3oo
                                              ease-in-out hover:scale-105 hover:shadow-md">
                       <img src={`/assets/logos/${logo}.png`} 
                       width="100"
                       height="60"
                       alt={logo}
                       className="h-12 lg:h-20 md:h-14 w-full object-contain grayscale hover:grayscale-0 transition duration-300"/>
                    </div>   
                    ))}
                </div>
            </Container> 
            </section>
    );
};