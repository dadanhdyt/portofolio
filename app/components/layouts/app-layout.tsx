import Navbar from "../shared/navbar";

const AppLayout = ({children})=>{
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}   

export default AppLayout;