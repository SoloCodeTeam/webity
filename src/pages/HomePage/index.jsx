import { NavbarComp } from "../../components/NavbarComp";
import { AboutComp } from "../../components/AboutComp";
import { HeaderComp } from "../../components/HeaderComp";
import { InfoComp } from "../../components/InfoComp";
import { WorkComp } from "../../components/WorkComp";
import { FooterComp } from "../../components/FooterComp";
import { MessageComp } from "../../components/MessageComp";


export function HomePage() {
   return(
       <div className="HomePage">
        <a href="#body" className="toUpSide"><i className="fa-solid fa-caret-up"></i></a>
        <NavbarComp/>
        <HeaderComp/>
        <AboutComp/>
        <WorkComp/>
        <InfoComp/>
        <MessageComp/>
        <FooterComp/>
       </div>
   )
}