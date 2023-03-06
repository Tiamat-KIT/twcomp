import React from "react";

export default function Flex({children}:{children:React.ReactNode}){
    return(
        <div className="flex">
            {children}
        </div>
    )
}