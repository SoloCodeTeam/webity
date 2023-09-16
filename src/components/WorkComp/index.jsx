import { useTranslation } from 'react-i18next';
import { GearAnimation } from '../../utils'
import { Project3D } from '../Project3D';
import { ProjectAudio } from '../ProjectAudio';
import { ProjectImage } from '../ProjectImage';
import { ProjectVideo } from '../ProjectVideo';
import './style.css'

export function WorkComp() {
    const { t, i18n } = useTranslation();
   return(
       <div className="WorkComp" id='works'>
        <div className="overlay"></div>
        <h2 data-aos="zoom-in">{t("works.0")}</h2>
        <GearAnimation/>
        <p data-aos="fade-down">{t("works.1")}</p>
        <div className="WorkBtn">
            <button>{t("works.2")}</button>
            <button>{t("works.3")}</button>
            <button>{t("works.4")}</button>
            <button>{t("works.5")}</button>
        </div>
        <div className="WorkList">
            {/* <ProjectVideo/>
            <ProjectImage/>
            <ProjectAudio/>
            <Project3D/> */}
        </div>
       </div>
   )
}