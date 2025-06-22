import { Outlet } from "react-router";
import Footer from "@/components/layout/landing-page/component/footer";
import Navbar from "@/components/layout/landing-page/component/navbar.tsx";

function LandingPageLayout() {
    return (
        <main className="flex flex-col w-full">
            <Navbar/>
            <div className="flex flex-col flex-1 w-full">
                <Outlet/>
            </div>
            <Footer/>

        </main>
    );
}

export default LandingPageLayout;