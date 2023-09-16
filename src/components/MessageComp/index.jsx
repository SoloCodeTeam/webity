import { useTranslation } from "react-i18next";
import "./style.css"
import { GearAnimation } from "../../utils";
import { useRef } from "react";
import axios from "axios";

export function MessageComp() {
    const name = useRef()
    const message = useRef()
    const phone = useRef()
    const { t, i18n } = useTranslation();
    const telegram_bot_id = "5969874361:AAHtp0awChvZijejQ4eHr83qReplSmpyv2g";
    const chat_id = 852144616;
    let sendMessage;
    const ready = function() {
        sendMessage = "Ismi: " + name.current.value + "\nTelefon raqami: " + phone.current.value + "\nXabar: " + message.current.value;
    };
    const sendTelegram = () => {
        ready();
        axios.post("https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",{"chat_id": chat_id,"text":sendMessage})
        name.current.value = "";
        message.current.value = "";
        phone.current.value = "";
    };
    return(
        <div className="MessageComp">
            <h1 data-aos="zoom-in">{t("message.0")}</h1>
            <GearAnimation/>
            <p data-aos="fade-down">{t("message.1")}</p>
            <div className="MessageBox">
                <form data-aos="fade-up" onSubmit={(e) => {e.preventDefault();sendTelegram();}}>
                    <h2>{t("message.3")}</h2>
                    <span>
                        <input ref={name} type="text" required placeholder={t("message.4")}/>
                        <input ref={phone} type="text" required placeholder={t("message.5")}/>
                    </span>
                    <textarea required ref={message} placeholder={t("message.6")}></textarea>
                    <button type="submit"><i className="fa-solid fa-message"/>  {t("message.7")}</button>
                </form>
                <div className="LinksBox">
                    <a data-aos="fade-up" href="https://instagram.com" className="fa-brands fa-instagram"></a>
                    <a data-aos="fade-up" href="https://facebook.com" className="fa-brands fa-facebook"></a>
                    <a data-aos="fade-up" href="https://t.me/" className="fa-brands fa-telegram"></a>
                    <a data-aos="fade-up" href="https://twitter.com" className="fa-brands fa-twitter"></a>
                    <a data-aos="fade-up" href="tel:+998940870509" className="fa-solid fa-phone"></a>
                </div>
            </div>
        </div>
    )
}