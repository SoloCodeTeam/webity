import "./style.css"

export function DarkLight() {
    return(
        <div className="DarkLight">
            <i onClick={() => {document.styleSheets[0].insertRule(':root { --white: #FFF;--black: #062033; }')}} class="fa-regular fa-moon"></i>
            <i onClick={() => {document.styleSheets[0].insertRule(':root { --white: #062033;--black: #FFF; }')}} class="fa-regular fa-sun"></i>
        </div>
    )
}