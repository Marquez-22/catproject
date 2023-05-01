import { IconMenuBar } from "@/svg/IconMenuBar"

type BotonmenuType="btnMenu1"

interface BotonmenuProps{
    type?:BotonmenuType
}

export const Botonmenu = ({type="btnMenu1"}:BotonmenuProps)=>{
    const BtnMenuClick = ()=>{
        document.body.classList.toggle("activeMenu")
    }
    return(<>
    <div className={`btnMenu ${type}`} onClick={BtnMenuClick}>
            <IconMenuBar/>
    </div>
    </>)
}