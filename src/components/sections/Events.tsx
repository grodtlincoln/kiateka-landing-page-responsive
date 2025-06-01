import { events } from "../../utils/events-data";
import {Event} from "../cards/Event"
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const Events = () => {
       
       
    return (
        <section id="Events">
            <Container className="space-y-4">
                <div className="max-w-3xl flex items-center gap-4">
                    
                    <Paragraph className="text-heading-1 text-2xl font-bold flex items-center"> Events around you
                    <img src="maplocation.png" alt="" aria-hidden="true" className="w-10 h-12 pb-4" />
                    </Paragraph>
                 </div>
                    
                    <Paragraph  className="text-heading-2 text-sm ml-2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Nihil cum eveniet inventore? Nobis, esse optio!
                    </Paragraph>
                
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event,key) =>(
                     <Event
                     key={key} 
                     title={event.title} 
                     description={event.description} 
                     icon={event.icon}
                     image={event.image}
                     />
                    ))}
                </div>

            </Container>  
        </section>
    );
};