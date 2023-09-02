import { NavbarComp } from "../../components/NavbarComp";
import { AboutComp } from "../../components/AboutComp";

export function HomePage() {
   return(
       <div className="HomePage">
        <NavbarComp/>
        <AboutComp/>
       </div>
   )
}