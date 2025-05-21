import Image from "next/image";
import SocialIconItem from "./components/social-icon-item";
import logoGoogle from "@assets/images/Logo Google.png";
import { FaFacebook, FaTwitter, FaApple } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function AuthSocial() {
  return (
    // Continue With
    <div className="text-center">
      {/* Title */}
      <div className="relative mb-4 flex items-center">
        <div className="h-px flex-grow bg-slate-200"></div>
        <span className="bg-white px-4 font-inter text-sm font-medium text-slate-500 sm:text-base">
          Or Continue with
        </span>
        <div className="h-px flex-grow bg-slate-200"></div>
      </div>

      {/* Icons */}
      <ul className="itmes-center flex justify-center gap-4 lg:gap-8">
        {/*Google*/}
        <SocialIconItem
          onClick={() => {
            signIn("google", {
              callbackUrl: "/user-dashboard",
            });
          }}
        >
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
          <FaFacebook className="scale-125 text-[#1877F2]" />
        </SocialIconItem>

        {/*Twitter*/}
        <SocialIconItem>
          <FaTwitter className="scale-125 text-[#1D9BF0]" />
        </SocialIconItem>

        {/*Apple*/}
        <SocialIconItem>
          <FaApple className="scale-125 text-black" />
        </SocialIconItem>
      </ul>
    </div>
  );
}
