import { RegisterForm } from "@/components/modules/Authentication/RegisterForm"
import registerBg from "@/assets/images/ride-register.jpeg"
import Logo from "@/assets/icons/Logo"
import { Link } from "react-router"

export default function Register() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="bg-muted relative hidden lg:block">
                <img
                    src={registerBg}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.8] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link to={"/"} className="flex items-center gap-2 font-medium">
                        <Logo></Logo>
                        Ride S.
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}