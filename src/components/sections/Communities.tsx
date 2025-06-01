import { Container } from "../shared/Container";

export const Communities = () => {
    return (
    <section id="Communities" className="py-6">
            <Container className="w-full space-y-6">

                       {/* header section */}
                <div className="text-center max-w-3xl mx-auto space-y-2">
                    <h1 className="text-heading-1 text-2xl md:text-3xl font-extrabold">
                        Gallery of Moments
                    </h1>
                   <p className="text-sm md:text-base text-heading-1">
                          Journey With Us Through Our Gallery: A Visual Odyssey Of Captured
                          Moments, Memories, and Creativity.
                   </p>

                         {/* image grid */}
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
                     <img src="/Rectangle69.png" alt="gallery 1" className="rounded-3xl w-full h-auto object-cover" />
                     <img src="/Rectangle1.png" alt="gallery 2" className="rounded-3xl w-full h-auto object-cover" />
                     <img src="/Rectangle2.png" alt="gallery 3" className="rounded-3xl w-full h-auto object-cover"/>
                     <img src="/Rectangle3.png" alt="gallery 4" className="rounded-3xl w-full h-80 object-cover"/>
                   </div>
                </div>
           </Container>
    </section>
    );
};