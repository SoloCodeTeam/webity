import { AboutComp } from "../../components/AboutComp";
import { FooterComp } from "../../components/FooterComp";
import { MessageComp } from "../../components/MessageComp";


export function HomePage() {
   return(
       <div className="HomePage">
        <AboutComp/>
        <MessageComp/>
        <FooterComp/>
       </div>
   )
}