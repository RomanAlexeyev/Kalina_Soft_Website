import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";

const Layout = () => {
    return (
        <div className="page-wrapper">
            <Header />
            <div className="body-wrapper"><Outlet /></div>
        </div>
    );
};

export default Layout;
