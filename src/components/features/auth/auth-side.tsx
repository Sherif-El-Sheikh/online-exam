import Image from "next/image"
import examBro from "../../../../public/assets/images/bro.png"

export default function AuthSide() {
    return (
        <section className="hidden md:block bg-blue-100/40 rounded-tr-auth rounded-br-auth shadow-auth-side h-dvh md:w-[450px] lg:w-[550px] xl:w-[650px]">
            <div className="h-full md:w-[350px] lg:w-[482px] md:px-10 lg:pl-20 lg:pr-20">
                <header className="font-poppins md:pb-40 md:pt-20 lg:pb-16">
                {/* Logo */}
                <h1 className="font-bold md:text-3xl/[150%] lg:text-5xl/[150%] mb-2">Welcome to
                    <span className="text-main"> Elevate</span>
                </h1>

                {/* Description */}
                <p className="font-medium md:text-sm/10 lg:text-base/10">Start exciting quizzes now, challenge yourself and level up today</p>
                </header>

                {/* /Side Image */}
                <div className="flex justify-center items-center ">
                <Image
                src={examBro}
                width={320}
                priority
                alt="online exam photo"
                />
                </div>
            </div>
        </section>
    )
}
