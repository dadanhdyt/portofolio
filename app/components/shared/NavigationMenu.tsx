export default function NavigationMenu(){
    return (
        <div className="flex">
            <ul className="flex items-center justify-between space-x-6  text-text">
                <li><a className="hover:text-primary transition-all" href="">About</a></li>
                <li><a className="hover:text-primary transition-all" href="">Projects</a></li>
                <li><a className="hover:text-primary transition-all" href="">Contact</a></li>
            </ul>
        </div>
    )
}