import { AboutComp } from "../../components/AboutComp";
import { FooterComp } from "../../components/FooterComp";
import { MessageComp } from "../../components/MessageComp";
import { ProjectComp } from "../../components/ProjectComp";


export function HomePage() {
    document.cookie = "lang=uz"
    console.log(document.cookie);
    const button =() => {
        document.cookie = "lang=ru"
        console.log(document.cookie.indexOf("lang"));
    }
   return(
       <div className="HomePage">
        <AboutComp/>
        <ProjectComp/>
        <button onClick={button}>nivec</button>
        <MessageComp/>
        <FooterComp/>
       </div>
   )
}