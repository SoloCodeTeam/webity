import { useRef, useState } from 'react'
import './style.css'

export function LangSelect() {
    const LangList = useRef();
    const LanBtn = useRef();
    const LanBtnCls = useRef();
    const langug = useRef();
    const LangSel = (e) => {
        if(e.target.id == "uz") {window.localStorage.setItem('lng','uz');}
        if(e.target.id == "en") {window.localStorage.setItem('lng','en');}
        if(e.target.id == "ru") {window.localStorage.setItem('lng','ru');}
        LangList.current.style.transform = "scale(0)"
        LanBtn.current.style.display = "flex"
        LanBtnCls.current.style.display = "none"
        window.location.reload()
    }
    const LangBtn = () => {
        LangList.current.style.transform = "scale(1)"
        LanBtn.current.style.display = "none"
        LanBtnCls.current.style.display = "flex"
    }
    const LangBtnCls = () => {
        LangList.current.style.transform = "scale(0)"
        LanBtn.current.style.display = "flex"
        LanBtnCls.current.style.display = "none"
    }
    return(
        <div className="LangSelect">
            <button className='LangBtn' ref={LanBtn} onClick={LangBtn}>{window.localStorage.getItem('lng')}<i className='fa-solid fa-caret-down'></i></button>
            <button className='LangBtnCls' ref={LanBtnCls} onClick={LangBtnCls}>{window.localStorage.getItem('lng')}<i className='fa-solid fa-caret-up'></i></button>
            <div className="LangList" ref={LangList}>
                <button onClick={LangSel} id="uz" ref={langug}>uz</button>
                <button onClick={LangSel} id="en" ref={langug}>en</button>
                <button onClick={LangSel} id="ru" ref={langug}>ru</button>
            </div>
        </div>
    )
 }