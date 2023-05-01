import { ReactNode } from "react"

type ContainerType="cont1"


interface ContainerProps{
type?: ContainerType
children?:ReactNode
}


export const Container = ({children, type="cont1"}:ContainerProps) => {
    return(<>
    <div className={`container ${type}`}>
        {children}
    </div>
    

    
    
    </>)
}