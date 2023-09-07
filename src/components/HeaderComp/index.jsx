import './style.css'
import { useTranslation } from "react-i18next";

export function HeaderComp() {
    const { t, i18n } = useTranslation();
    return(
        <div className="HeaderComp">
            {/* <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1693499513/webity/banner_ia2yxq.jpg" alt="" /> */}
            <div className="HeaderTexts">
                <h1 data-aos-duration="1000" data-aos="fade-up">webity.uz</h1>
                <h2 data-aos="fade-right">{t("header.0")}</h2>
                <p data-aos="fade-left"><div className="HeadLine1"></div>{t("header.1")}<div className="HeadLine2"></div></p>
                <div data-aos="fade-down" className="HeaderPath">
                    <a className='fa-brands fa-twitter'></a>
                    <a className='fa-brands fa-facebook'></a>
                    <a className='fa-brands fa-instagram'></a>
                    <a className='fa-brands fa-telegram'></a>
                </div>
            </div>
        </div>
    )
 }