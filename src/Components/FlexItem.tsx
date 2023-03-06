import React from "react";

type Range<From extends number, To extends number, Result extends string[] = []> = {
    0: Range<From, To, [...Result, `${From}`]>,
    1: Result
}[From extends To ? 1 : 0];

export default function FlexItem(
    {
        children,
        FlexSize,
        Grow,
        Shrink
    }:{
        children: React.ReactNode,
        FlexSize?: "1" | "auto" | "initial" | "none" ,
        Grow?: "1" | "0" ,
        Shrink: "1" | "0"
    }){

    return (
        <div>
            {children}
        </div>
    )
}