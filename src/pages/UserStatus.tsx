import Logo from "@/assets/icons/Logo";
import { Link, useLocation } from "react-router";


const UserStatus = () => {
    const location = useLocation();
    const { email, status } = location.state || {};

    return (
        <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <Link to={"/"} className="flex items-center gap-2 font-medium">
                    <Logo></Logo>
                    Ride S.
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
                <h1 className="text-3xl font-bold mb-4">Account Status</h1>
                <p className="text-muted-foreground">Your Email: {email}</p>
                <p className="text-lg mb-2">{status}</p>
                <p className="mt-4">Please contact support to resolve this issue.</p>
            </div>
        </div>
    );
};

export default UserStatus;