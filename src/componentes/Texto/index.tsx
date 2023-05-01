import { Children, ReactNode } from "react"

type TextoType = "texto1"|"texto2"|"titulo1"|"titulo2"

interface TextoProps {
type?:TextoType
children?:ReactNode// => puede enviar srting,objeto array cualquier cosa 
}

export const Texto =({children, type="texto1"}:TextoProps) =>{
    return(<>
    <div className={`texto ${type}`}>
        {children}
    </div>
    
    
    
    </>)
}