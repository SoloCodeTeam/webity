import { NavbarComp } from "../../components/NavbarComp";
import { AboutComp } from "../../components/AboutComp";
import { HeaderComp } from "../../components/HeaderComp";
import { InfoComp } from "../../components/InfoComp";
import { WorkComp } from "../../components/WorkComp";
import { FooterComp } from "../../components/FooterComp";
import { MessageComp } from "../../components/MessageComp";

export function HomePage() {
    document.cookie = "lang=uz"
    console.log(document.cookie);
    const button =() => {
        document.cookie = "lang=ru"
        console.log(document.cookie.indexOf("lang"));
    }
   return(
       <div className="HomePage">
        <a href="#body" className="toUpSide"><i className="fa-solid fa-caret-up"></i></a>
        <NavbarComp/>
        <HeaderComp/>
        <AboutComp/>
        <WorkComp/>
        <InfoComp/>
        {/* <button onClick={button}>nivec</button> */}
        <MessageComp/>
        <FooterComp/>
       </div>
   )
}