
import SwitchLanguage from "@/components/common/switch-language";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AuthNav() {
    return (
        <nav className="flex items-center justify-end space-x-4 pl-8 pr-8 pt-3 max-[375px]:justify-center md:space-x-5 md:pl-0 md:pr-3 lg:space-x-12 lg:pr-8 xl:pr-32">
            {/* Select Lang */}
            <SwitchLanguage />

            {/* Button Signin*/}
            <Link href="/auth/login">
                <Button variant="signin">
                    Sign in
                </Button>
            </Link>

            {/* Button Register*/}
            <Link href="/auth/register">
                <Button variant="register">
                    Register
                </Button>
            </Link>
        </nav>
    );
}
