import './style.css'
import { useTranslation } from "react-i18next";

export function NavbarComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="NavbarComp">
            <h1>webity.uz</h1>
            <ul>
                <li><a href=''>{t("navbar.0")}</a></li>
                <li><a href=''>{t("navbar.1")}</a></li>
                <li><a href=''>{t("navbar.2")}</a></li>
                <li><a href="tel:+998940870509">+998 94 087 05 09</a></li>
            </ul>
        </div>
    )
 }