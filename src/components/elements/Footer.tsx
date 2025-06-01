


export const Footer = () => {
  return (
    <footer className="bg-green-950 text-white px-6 py-10 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

           {/* About section */}
        <div>
           <h2 className="text-lg font-bold mb-3">
            About us
           </h2>
           <p className="text-sm leading-relaxed">
               Ut enim ad minim venaiam, quis nostrud exercitation ullamco laboris nisi ut alliquip
               ex ea commado consequat. Duis aute irure dolor in reprehenderit in volupate velit esse
               cillum dolore eu fugaiat nulla pariatur
           </p>

           <p className="text-xs pt-4">
            @2023 Hacktoberfest Ekiti. All rights <br /> reserved 
           </p>
        </div>

              {/* Company links */}
       <nav>
          <h2 className="text-lg font-bold mb-3">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><a href= "#" className="hover:underline">Event</a></li>
              <li><a href= "#" className="hover:underline">Communities</a></li>
              <li><a href= "#" className="hover:underline">About us</a></li>
              <li><a href= "#" className="hover:underline">Our Blog</a></li>    
            </ul>
        </nav> 

              {/* Support Links */}
        <nav>
          <h2 className="text-lg font-bold mb-3"> Support </h2>
            <ul className="space-y-2 text-sm">
              <li><a href= "#" className="hover:underline">Twitter</a></li>
              <li><a href= "#" className="hover:underline">Github</a></li>
              <li><a href= "#" className="hover:underline">Linkedin</a></li>
              <li><a href= "#" className="hover:underline">Email</a></li>    
            </ul>
        </nav>
      </div>
    </footer>
  );
};