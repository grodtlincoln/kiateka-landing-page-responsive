import { Info } from "../cards/Info";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";



export const AboutUs = () => {
    return (
        <section id="about-us"> 
              
              {/* Section: Intro */}
        <Container className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">

            {/* image block */}
            <div className="w-full md:5/12 lg:w-1/2">
                <div className="w-full h-80 relative">
                   <img src="rectang2.jpg" alt="Event image" 
                   className="w-full h-full object-cover rounded-3xl shadow-lg"/>
                </div>
            </div> 

                   {/* Text Content */}
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col ">
                <span className="text-white text-sm bg-green-900 rounded-full px-3 py-1 w-fit mb-2">
                    About Us
                </span>

                <Paragraph className="text-heading-1 font-bold text-3xl pt-2">
                                    Celebrate Our History: Discover the Journey of 
                    <span className="italic text-green-700"> Event Trakka</span>
                </Paragraph>
                
                <Paragraph className="text-heading-3 text-sm mt-2">
                    Welcome to EventTrakka, your ultimate event management solution. 
                    Streamline event organisation and execution by getting proper imformation using our 
                    powerful web app. Easily manage and track every aspect of your events, from Information
                    to organizers. Say goodbye to event management stress and hello to success.
                </Paragraph>
            </div>
        </Container>

                      {/* Section: Feature Cards */}
        <Container className="pt-15 space-y-4">
            <h2 className=" text-lg md:text-xl font-semibold text-heading-2">
                Your Ultimate Event Management Solution 
            </h2>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Aliquam non pretium enim.
            </Paragraph>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Info 
                        title ="Event Management" 
                        description="Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Aliquam non pretium enim.">
                        <img src="/image.svg" alt="Event icon" className="w-8 h-8" />
                    </Info>

                    <Info 
                            title ="Task Management" 
                            description="Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Aliquam non pretium enim.">
                            <img src="/image.svg" alt="Event icon" className="w-8 h-8" />
                    </Info>

                    <Info 
                            title ="Task Management" 
                            description="Lorem ipsum dolor sit amet, consectetur 
                                 adipiscing elit. Aliquam non pretium enim.">
                            <img src="/image.svg" alt="Event icon" className="w-8 h-8" />
                    </Info>
            </div>
        </Container>

         
        </section>
    );
}