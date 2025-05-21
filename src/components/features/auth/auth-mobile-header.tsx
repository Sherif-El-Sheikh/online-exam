import Image from "next/image";
import examBro from "@assets/images/bro.png";

export default function AuthMobileHeader() {
  return (
    <section className="px-1 pb-3 pt-6 md:hidden">
      <div className="flex items-center justify-between gap-5 rounded-br-2xl rounded-tr-2xl bg-blue-100/40 p-3 shadow-auth-side">
        <header className="font-poppins">
          {/* Logo */}
          <h1 className="mb-2 text-xl/[150%] font-bold max-[570px]:text-lg">
            Welcome to
            <span className="text-main"> Elevate</span>
          </h1>

          {/* Description */}
          <p className="text-balance text-xs font-medium max-[570px]:text-[0.65rem]">
            Start exciting quizzes now, challenge yourself and level up today
          </p>
        </header>

        {/* /Header Image */}
        <div className="flex items-center justify-center">
          <Image src={examBro} width={180} priority alt="online exam photo" />
        </div>
      </div>
    </section>
  );
}
