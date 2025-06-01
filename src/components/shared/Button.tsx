
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}


export const Button =({ onClick, children, className = ""}: ButtonProps) => {

   return (
       <button
           onClick= {onClick} className= {`px-4 py-2 rounded-lg outline-none cursor-pointer
                                         relative overflow-hidden border border-transparent 
                                         bg-green-900 ${className}`}>{children}
       </button>
   );
};