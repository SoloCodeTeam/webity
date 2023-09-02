import { useTranslation } from "react-i18next";
import "./style.css"
import { GearAnimation } from "../../utils";

export function AboutComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="AboutComp">
            <h1>{t("about.0")}</h1>
            <GearAnimation  />
        </div>
    )
}