import { Outlet } from "react-router";


const DashboardLayout = () => {
    return (
        <div>
            DashboardLayout
            <div className="flex flex-1 flex-col gap-4 p-4">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;