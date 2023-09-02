import { useTranslation } from "react-i18next";
import "./style.css"
import { GearAnimation } from "../../utils";

export function AboutComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="AboutComp">
            <h1>{t("about.0")}</h1>
            <GearAnimation/>
            <ul>
                <li>
                <i class="fa-solid fa-users"></i>
                    <span>
                        <h2>{t("about.1")}</h2>
                        <p>{t("about.2")}</p>
                    </span>
                </li>
                <li>
                <i class="fa-solid fa-pencil"></i>
                    <span>
                        <h2>{t("about.3")}</h2>
                        <p>{t("about.4")}</p>
                    </span>
                </li>
                <li>
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