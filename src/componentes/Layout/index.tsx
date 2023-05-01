import { ReactNode } from "react"
import { Botonmenu } from "../Botonmenu"
import { Menu } from "../Menu"

type LayoutType ="layout1"

interface LayoutProps{
    type?:LayoutType
    children?:ReactNode

}

export const Layout = ({children, type="layout1"}:LayoutProps) =>{
    return(<>
    <div className={`layout ${type}`}> 
    {/* layout sirve para imprimir la estructura de la pagina// */}
        <div className="contentBtn">
            <Botonmenu/>
        </div>
        <div className="contentMenu">
            <Menu/>
            
        </div>
        <div className="contentPage">
            {children}
        </div>
    </div>
    
    
    </>)
}