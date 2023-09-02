import { AboutComp } from "../../components/AboutComp";
import { FooterComp } from "../../components/FooterComp";


export function HomePage() {
   return(
       <div className="HomePage">
        <AboutComp/>
        <FooterComp/>
       </div>
   )
}