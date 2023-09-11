import './style.css'
import { useTranslation } from "react-i18next";
import { useRef, useState } from 'react';
import { LangSelect } from '../../locales';
import { use } from 'i18next';

export function NavbarComp() {
    const NavBtn1 = useRef();
    const NavBtn2 = useRef();
    const NavCompMenu = useRef();
    // const [color, setColor] = useState('')
    const { t, i18n } = useTranslation();
    const NavBtn = () => {
        NavCompMenu.current.style.animationName = "NavMenuOpen"
        NavCompMenu.current.style.left = "0"
        NavBtn1.current.style.display = "none"
        NavBtn2.current.style.display = "block"
    }
    const NavBtnCls = () => {
        NavCompMenu.current.style.animationName = "NavMenuClose"
        NavCompMenu.current.style.left = "100%"
        NavBtn1.current.style.display = "block"
        NavBtn2.current.style.display = "none"
    }
    // window.addEventListener('scroll', () => {
    //     if(window.scrollY == 700) {
    //         setColor('#0eb493')
    //     }
    //     if(window.scrollY !== 700) {
    //         setColor('#10163633')
    //     }
    // })
    return(
        <div className="NavComp">
            <div className="NavbarComp">.
                <h1><a href="#body">webity.uz</a></h1>
                <LangSelect/>
                <button className='NavbarCompBtn1' ref={NavBtn1} onClick={NavBtn}><i className='fa-solid fa-bars'></i></button>
                <button className='NavbarCompBtn2' ref={NavBtn2} onClick={NavBtnCls}><i className='fa-solid fa-xmark'></i></button>
                <ul className='NavbarCompList'>
                    <li><a href='#body'>{t("navbar.0")}</a></li>
                    <li><a href='#features'>{t("navbar.1")}</a></li>
                    <li><a href='#works'>{t("navbar.2")}</a></li>
                    <li><a href="tel:+998940870509">+998 94 087 05 09</a></li>
                </ul>
            </div>
            <ul className='NavbarCompMenu' ref={NavCompMenu}>
                <li onClick={NavBtnCls}><a href='#body'>{t("navbar.0")}</a></li>
                <li onClick={NavBtnCls}><a href='#features'>{t("navbar.1")}</a></li>
                <li onClick={NavBtnCls}><a href='#works'>{t("navbar.2")}</a></li>
                <li onClick={NavBtnCls}><a href="tel:+998940870509">+998 94 087 05 09</a></li>
            </ul>
        </div>
    )
 }