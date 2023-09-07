import { useTranslation } from "react-i18next";
import "./style.css"

export function FooterComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="FooterComp">
            <ul>
                <li>
                    <a href="https://webity.uz">webity.uz</a>
                    <h3>{t("footer.0")}</h3>
                </li>
                <li>
                    <h3>{t("footer.1")}</h3>
                    <a href="https://.com"><i className="fa-brands fa-instagram"/>Instagram</a>
                    <a href="https://.com"><i className="fa-brands fa-telegram"/>Telegram</a>
                    <a href="https://.com"><i className="fa-brands fa-twitter"/>Twitter</a>
                    <a href="https://.com"><i className="fa-brands fa-facebook"/>Facebook</a>
                </li>
                <li>
                    <h3>{t("footer.2")}</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987083324!2d69.11455528484187!3d41.28273794647117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1693680698334!5m2!1sen!2s" width="400" height="300"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </li>
            </ul>
            <p>Copyright © 2023 SoloCode. All rights reserved.</p>
        </div>
    )
}