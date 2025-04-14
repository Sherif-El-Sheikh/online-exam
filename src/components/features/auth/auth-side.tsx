import Image from "next/image"
import examBro from "../../../../public/assets/images/bro.png"

export default function AuthSide() {
    return (
        <section className="bg-blue-100/40 w-[708px] rounded-tr-auth rounded-br-auth shadow-auth-side">
            <div className="w-[488px] pl-20">
                <header className="font-poppins py-20">
                {/* Logo */}
                <h1 className="font-bold text-5xl/[150%] mb-2">Welcome to
                    <span className="text-main"> Elevate</span>
                </h1>

                {/* Description */}
                <p className="font-medium text-base/10">Start exciting quizzes now, challenge yourself and level up today</p>
                </header>

                {/* /Logo Image */}
                <Image
                src={examBro}
                width={320}
                height={434}
                alt="online exam photo"
                />
            </div>
        </section>
    )
}
