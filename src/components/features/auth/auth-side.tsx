import Image from "next/image";
import examBro from "@assets/images/bro.png";

export default function AuthSide() {
  return (
    <section className="hidden min-h-screen rounded-br-auth rounded-tr-auth bg-blue-100/40 shadow-auth-side md:block md:w-[450px] lg:w-[550px] xl:min-w-[650px] 3xl:w-3/4">
      <div className="h-full md:w-[350px] md:px-10 lg:w-[482px] lg:pl-20 lg:pr-20 3xl:w-3/4">
        <header className="font-poppins md:pb-40 md:pt-8 lg:pb-16 3xl:pb-36">
          {/* Logo */}
          <h1 className="mb-2 font-bold md:text-3xl/[150%] lg:text-5xl/[150%]">
            Welcome to
            <span className="text-main"> Elevate</span>
          </h1>

          {/* Description */}
          <p className="font-medium md:text-sm/10 lg:text-base/10">
            Start exciting quizzes now, challenge yourself and level up today
          </p>
        </header>

        {/* /Side Image */}
        <div className="flex items-center justify-center">
          <Image src={examBro} width={320} priority alt="online exam photo" />
        </div>
      </div>
    </section>
  );
}
