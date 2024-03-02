import Herosection from "./Herosection";
import Secondabout from "./Secondabout";
import Service from "./Service";
import Topsection from "./Topsection";

const About = () => {
    return ( 
        <div className="">
            <Herosection/>
            <Topsection/>
            {/* <Secondabout/> */}
            <Service/>
        </div>
     );
}
 
export default About;