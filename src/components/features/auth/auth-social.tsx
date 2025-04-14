import Image from "next/image"
import SocialIconItem from "./components/social-icon-item"
import logoGoogle from '../../../../public/assets/images/Logo Google.png'
import { FaFacebook, FaTwitter, FaApple } from 'react-icons/fa';

export default function AuthSocial() {
    return (
        // Continue With
        <div className="text-center">
            {/* Title */}
            <div className="relative flex items-center mb-6">
                <div className="flex-grow h-px bg-slate-200"></div>
                    <span className="px-4 bg-white text-sm sm:text-base text-slate-500 font-medium font-inter">Or Continue with</span>
                <div className="flex-grow h-px bg-slate-200"></div>
            </div>

            {/* Icons */}
            <ul className="flex itmes-center justify-center gap-4 lg:gap-8">
                {/*Google*/}
                <SocialIconItem href=''>
                    <Image
                    src={logoGoogle}
                    alt="google icon"
                    width={20}
                    height={20}
                    className="lg:w-5"
                    />
                </SocialIconItem>

                {/*Facebook*/}
                <SocialIconItem href='https://www.facebook.com'>
                    <FaFacebook className=" text-[#1877F2] text-2xl" />
                </SocialIconItem>

                {/*Twitter*/}
                <SocialIconItem href='https://api.twitter.com'>
                    <FaTwitter className=" text-[#1D9BF0] text-2xl" />
                </SocialIconItem>
                
                {/*Apple*/}
                <SocialIconItem href='https://appleid.apple.com'>
                    <FaApple className=" text-black text-2xl" />
                </SocialIconItem>
            </ul>
        </div>
    )
}
