import { Layout } from "./components/Layout";
import { Brands } from "./components/sections/Brands";
import { Hero } from "./components/sections/Hero";
import {Events} from "./components/sections/Events";
import { AboutUs } from "./components/sections/AboutUs";
import { Communities } from "./components/sections/Communities";



function App() {

  
  return (
  <Layout title="Kiteka">
    <Hero />
    <Brands />
    <AboutUs />
    <Events />
    <Communities />
   
  </Layout>
  );
}

export default App;
