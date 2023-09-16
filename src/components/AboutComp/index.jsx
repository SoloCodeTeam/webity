import { useTranslation } from "react-i18next";
import "./style.css"
import { GearAnimation } from "../../utils";
import { useState } from "react";

export function AboutComp() {
    const [faderight, setFaderight] = useState('fade-right')
    const [fadeleft, setFadeleft] = useState('fade-left')
    const { t, i18n } = useTranslation();
    if(window.screen.width < 801){
        setFadeleft('fade-up')
        setFaderight('fade-up')
    }
    return(
        <div className="AboutComp" id="features">
            <h1 data-aos="zoom-in">{t("about.0")}</h1>
            <GearAnimation/>
            <ul>
                <li data-aos={faderight}>
                <i class="fa-solid fa-users"></i>
                    <span>
                        <h2>{t("about.1")}</h2>
                        <p>{t("about.2")}</p>
                    </span>
                </li>
                <li data-aos="fade-up">
                <i class="fa-solid fa-pencil"></i>
                    <span>
                        <h2>{t("about.3")}</h2>
                        <p>{t("about.4")}</p>
                    </span>
                </li>
                <li data-aos={fadeleft}>
                <i class="fa-solid fa-trophy"></i>
                    <span>
                        <h2>{t("about.5")}</h2>
                        <p>{t("about.6")}</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}