import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Hero = () => {
     return (
<section className="relative pt-30 lg:pt-36">
          
     <Container className="flex flex-col lg:flex-row gap-10">

          <div className="mt-10 relative flex flex-col lg:py-8 lg:max-w-none max-w-3xl 
                          mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">

               <h1 className="text-xs border border-transparent rounded-full bg-green-900
                               w-52 px-2 text-white"> WELCOME TO EVENT TRACKER </h1>

          <Paragraph className="mt-2 text-heading-1 text-4xl leading-12 font-bold">
              Seamless Event <br /> Management Made <br></br>Effortless 
          </Paragraph>
           <Paragraph className="mt-2 text-heading-3 text-xs">
               Getting Information About Tech Event In Ekiti Just In One <br />Place. All-In-One Tech Event Resources.
           </Paragraph>
           <div className="mt-2 max-w-md">
               <Button className="text-white">
                    <span className="relative z-[5]">See Upcoming events</span>
               </Button>
             </div>
          </div>
               
               {/* image section */}
     <div className="flex flex-1 lg:w-1/2 relative lg:max-w-none mx-auto max-w-3xl">
                    <img src="rectangle1.jpg" 
                     alt="Hero image" 
                     width={2350} 
                     height={2360} 
                     className="rounded-3xl object-cover max-h-[500px] h-[450px] md:h-[550px] h-[360px] sm:h-[550px]" />
     </div>
    </Container>
</section>
     );
};

