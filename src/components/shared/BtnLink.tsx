 interface BtnLinkProps {
       href: string;
       text: string;
       className?: string;
    }
    
    
    export const BtnLink =({href, text, className="" }: BtnLinkProps) => {
    
       return ( 
          <a href={href} className= {`px-4 py-2 rounded-lg outline-none relative
                                    overflow-hidden border dark:bg-green-900 cursor-pointer 
                                    transform transition duration-500  ${className} `} 
          > 
            <span className="relative z-10 text-white"> {text} </span> 
          </a>
       );
    };
