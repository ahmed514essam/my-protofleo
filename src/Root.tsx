import { Outlet } from "react-router-dom";
import Header from "./MainComponents/MainFooter/Header/Header";
import Footer from "./MainComponents/MainFooter/Footer/Footer";


const Root = () => {
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
);
}
export default Root ;