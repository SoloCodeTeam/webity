import { useTranslation } from 'react-i18next';
import { GearAnimation } from '../../utils'
import { Project3D } from '../Project3D';
import { ProjectAudio } from '../ProjectAudio';
import { ProjectImage } from '../ProjectImage';
import { ProjectVideo } from '../ProjectVideo';
import './style.css'
import { useState } from 'react';

export function WorkComp() {
    const { t, i18n } = useTranslation();
    const [type, setType] = useState()
    const ChangeType= async (e) => {
        await setType(e.target.value)
    }
   return(
       <div className="WorkComp" id='works'>
        <div className="overlay"></div>
        <h2 data-aos="zoom-in">{t("works.0")}</h2>
        <GearAnimation/>
        <p data-aos="fade-down">{t("works.1")}</p>
        <div className="WorkBtn">
            <button value="3d" onClick={ChangeType}>{t("works.2")}</button>
            <button value="video" onClick={ChangeType}>{t("works.3")}</button>
            <button value="logo" onClick={ChangeType}>{t("works.4")}</button>
            <button value="elem" onClick={ChangeType}>{t("works.5")}</button>
        </div>
        <div className="WorkList">
            {type == "video" ? <ProjectVideo/> :
            type == "logo" ? <ProjectImage/> :
            type == "elem" ? <ProjectAudio/> :
            type == "3d" ? <Project3D/> : <Project3D/>}
        </div>
       </div>
   )
}