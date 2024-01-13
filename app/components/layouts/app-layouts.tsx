import { ReactNode } from "react";
import AppNavigation from "./app-navigation";

export default function AppLayout({children} : React.ReactNode){
    return <>
    <div className="main">
        <AppNavigation/>
        {children}
    </div>
    </>;
}