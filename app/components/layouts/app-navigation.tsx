import NavigationMenu from "../shared/NavigationMenu";
import AppLogo from "../ui/AppLogo";

export default function AppNavigation(){
    return (
        <nav className="bg-background fixed w-full top-0">
            <div className="container">
                <div className="flex h-16 justify-between items-center">
                    <AppLogo/>
                    <NavigationMenu/>
                </div>
            </div>
        </nav>
    )
}