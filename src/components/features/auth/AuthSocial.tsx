import Image from "next/image"
import SocialIconItem from "./components/social-icon-item"
import logoGoogle from '../../../../public/assets/images/Logo Google.png'
import { FaFacebook, FaTwitter, FaApple } from 'react-icons/fa';

export default function AuthSocial() {
    return (
        // Continue With
        <div className="text-center">
            {/* Title */}
            <p className="continue">Or Continue with</p>

            {/* Icons */}
            <ul className="flex itmes-center justify-center gap-7 sm:gap-8">
                {/*Google*/}
                <SocialIconItem href='https://www.youtube.com/watch?v=QiIzrFQId9E'>
                    <Image
                    src={logoGoogle}
                    alt="prof"
                    width={24}
                    height={24}
                    />
                </SocialIconItem>

                {/*Facebook*/}
                <SocialIconItem href='https://www.facebook.com'>
                    <FaFacebook className=" text-[#1877F2]" />
                </SocialIconItem>

                {/*Twitter*/}
                <SocialIconItem href='https://api.twitter.com'>
                    <FaTwitter className=" text-[#1D9BF0]" />
                </SocialIconItem>
                
                {/*Apple*/}
                <SocialIconItem href='https://appleid.apple.com'>
                    <FaApple className=" text-black" />
                </SocialIconItem>
            </ul>
        </div>
    )
}
