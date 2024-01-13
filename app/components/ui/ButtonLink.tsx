import React from "react";

export default function ButtonLink({children,className} : any){
    return (
        <a className={`bg-primary-500 hover:bg-primary-400 shadow px-7 py-2 rounded-lg text-white inline-block ${className}`} href={""}>{ children }</a>
    )
}