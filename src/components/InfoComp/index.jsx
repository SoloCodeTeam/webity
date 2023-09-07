import './style.css'
import { GearAnimation } from '../../utils';
import { useTranslation } from "react-i18next";

export function InfoComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="InfoComp">
            <div className="InfoTexts">
                <h2 data-aos="zoom-in">{t("facts.0")}</h2>
                <GearAnimation/>
                <ul>
                    <li data-aos="fade-up">
                        <div className="InfoPath IP1"><i className='fa-solid fa-clock'></i></div>
                        <h3 className='InfoCount1'></h3>
                        <h4>{t("facts.1")}</h4>
                    </li>
                    <li data-aos="fade-up">
                        <div className="InfoPath IP2"><i className='fa-solid fa-people-group'></i></div>
                        <h3 className='InfoCount2'></h3>
                        <h4>{t("facts.2")}</h4>
                    </li>
                    <li data-aos="fade-up">
                        <div className="InfoPath IP3"><i className='fa-solid fa-rocket'></i></div>
                        <h3 className='InfoCount3'></h3>
                        <h4>{t("facts.3")}</h4>
                    </li>
                    <li data-aos="fade-up">
                        <div className="InfoPath IP4"><i className='fa-solid fa-trophy'></i></div>
                        <h3 className='InfoCount4'></h3>
                        <h4>{t("facts.4")}</h4>
                    </li>
                </ul>
            </div>
        </div>
    )
 }