import { ReactNode } from "react";
import Footer from "./Footer";

interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex flex-col ">
            <main className="flex flex-col justify-between flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

export default MainLayout;  