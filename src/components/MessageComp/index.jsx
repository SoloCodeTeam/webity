import { useTranslation } from "react-i18next";
import "./style.css"
import { GearAnimation } from "../../utils";

export function MessageComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="MessageComp">
            <h1>{t("message.0")}</h1>
            <GearAnimation/>
            <p>{t("message.1")}</p>
            <div className="MessageBox">
                <form>
                    <h2>{t("message.3")}</h2>
                    <span>
                        <input type="text" required placeholder={t("message.4")}/>
                        <input type="text" required placeholder={t("message.5")}/>
                    </span>
                    <textarea required placeholder={t("message.6")}></textarea>
                    <button type="submit"><i className="fa-solid fa-message"/>  {t("message.7")}</button>
                </form>
                <div className="LinksBox">
                    <a href="https://instagram.com" className="fa-brands fa-instagram"></a>
                    <a href="https://facebook.com" className="fa-brands fa-facebook"></a>
                    <a href="https://t.me/" className="fa-brands fa-telegram"></a>
                    <a href="https://twitter.com" className="fa-brands fa-twitter"></a>
                    <a href="tel:+998940870509" className="fa-solid fa-phone"></a>
                </div>
            </div>
        </div>
    )
}