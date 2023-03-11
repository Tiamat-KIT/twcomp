import React from "react";

export default function Flex(
    {
        children,
        direction,
        wrap
    }
    :
    {
        children:React.ReactNode,
        direction: "row" | "row-reverse" | "flex-col" | "col-reverse",
        wrap: "wrap" | "wrap-reverse" | "nowrap"
    }
){
    return(
        <div className="flex">
            {children}
        </div>
    )
}