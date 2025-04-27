import Image from "next/image"
import SocialIconItem from "./components/social-icon-item"
import logoGoogle from '../../../../public/assets/images/Logo Google.png'
import { FaFacebook, FaTwitter, FaApple } from 'react-icons/fa';
import { signIn } from "next-auth/react";

export default function AuthSocial() {

    return (
        // Continue With
        <div className="text-center">
            {/* Title */}
            <div className="relative flex items-center mb-4">
                <div className="flex-grow h-px bg-slate-200"></div>
                    <span className="px-4 bg-white text-sm sm:text-base text-slate-500 font-medium font-inter">Or Continue with</span>
                <div className="flex-grow h-px bg-slate-200"></div>
            </div>

            {/* Icons */}
            <ul className="flex itmes-center justify-center gap-4 lg:gap-8">
                {/*Google*/}
                <SocialIconItem onClick={() => {
                    signIn("google", {
                        callbackUrl: '/user-dashboard'
                    })
                }}>
                    <Image
                    src={logoGoogle}
                    alt="google icon"
                    width={20}
                    height={20}
                    className="w-[17px] lg:w-[18px]"
                    />
                </SocialIconItem>

                {/*Facebook*/}
                <SocialIconItem>
                    <FaFacebook className="text-[#1877F2] scale-125" />
                </SocialIconItem>

                {/*Twitter*/}
                <SocialIconItem>
                    <FaTwitter className="text-[#1D9BF0] scale-125" />
                </SocialIconItem>
                
                {/*Apple*/}
                <SocialIconItem>
                    <FaApple className="text-black scale-125" />
                </SocialIconItem>
            </ul>
        </div>
    )
}
