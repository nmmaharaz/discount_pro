import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className="bg-[#f2f2f2]">
            <div>
            <ToastContainer/>
            <Header></Header>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div> 
            <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;