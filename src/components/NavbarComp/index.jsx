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
    return(
        <div className="NavComp">
            <div className="NavbarComp">.
                <h1 onClick={()=>{window.location.href = '#body'}}>webity.uz</h1>
                <LangSelect/>
                <button className='NavbarCompBtn1' ref={NavBtn1} onClick={NavBtn}><i className='fa-solid fa-bars'></i></button>
                <button className='NavbarCompBtn2' ref={NavBtn2} onClick={NavBtnCls}><i className='fa-solid fa-xmark'></i></button>
                <ul className='NavbarCompList'>
                    <li onClick={()=>{window.location.href = '#body'}}>{t("navbar.0")}</li>
                    <li onClick={()=>{window.location.href = '#features'}}>{t("navbar.1")}</li>
                    <li onClick={()=>{window.location.href = '#works'}}>{t("navbar.2")}</li>
                    <li href="tel:+998940870509">+998 94 087 05 09</li>
                </ul>
            </div>
            <ul className='NavbarCompMenu' ref={NavCompMenu}>
                    <li onClick={()=>{window.location.href = '#body'}}>{t("navbar.0")}</li>
                    <li onClick={()=>{window.location.href = '#features'}}>{t("navbar.1")}</li>
                    <li onClick={()=>{window.location.href = '#works'}}>{t("navbar.2")}</li>
                    <li href="tel:+998940870509">+998 94 087 05 09</li>
            </ul>
        </div>
    )
 }