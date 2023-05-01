import Link from "next/link"
import { type } from "os"


type MenuType="menu"
interface MenuProps {
type?:MenuType
}

export const Menu = ({type="menu"}:MenuProps) =>{
    return(<>
    <div className={`menu ${type}`}>
        <Link href={"/"}>
            Home
        </Link>
        <Link href={"/about"}>
            About
        </Link>
        
        <Link href={"/contac"}>
            Contac
        </Link>

    </div>
    
    
    </>)
}