import Image from "next/image"
import examBro from "../../../../public/assets/images/bro.png"

export default function AuthMobileHeader() {
    return (
        <section className="md:hidden pt-10 pb-8 px-1 ">
        <div className="flex justify-between items-center gap-5 bg-blue-100/40 rounded-tr-2xl rounded-br-2xl shadow-auth-side p-4">
            <header className="font-poppins">
            {/* Logo */}
            <h1 className="font-bold max-[570px]:text-lg text-xl/[150%] mb-2">Welcome to
                <span className="text-main"> Elevate</span>
            </h1>

            {/* Description */}
            <p className="font-medium max-[570px]:text-[0.65rem] text-xs text-balance">Start exciting quizzes now, challenge yourself and level up today</p>
            </header>

            {/* /Header Image */}
            <div className="flex justify-center items-center ">
                <Image
                src={examBro}
                width={180}
                priority
                alt="online exam photo"
                />
            </div>
        </div>
    </section>
    )
}
