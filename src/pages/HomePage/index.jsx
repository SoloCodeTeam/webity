import { AboutComp } from "../../components/AboutComp";
import { FooterComp } from "../../components/FooterComp";
import { MessageComp } from "../../components/MessageComp";
import { ProjectComp } from "../../components/ProjectComp";


export function HomePage() {
   return(
       <div className="HomePage">
        <AboutComp/>
        <ProjectComp/>
        <MessageComp/>
        <FooterComp/>
       </div>
   )
}