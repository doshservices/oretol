import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export const PagesContainer = ({ children }: ContainerProps) => {
    return (
        <div className="pt-12 lg:pt-20">
            {children}
        </div>
    )
}