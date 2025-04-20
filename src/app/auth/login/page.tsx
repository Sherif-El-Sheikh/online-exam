import LoginForm from "./_components/login-form";

export default function Page() {
    return (
        <div className="px-3 py-2 md:max-lg:px-0 md:mt-20 3xl:mt-28">
            {/* Title */}
            <h2 className="mb-3 font-inter text-base font-bold min-[576px]:max-md:ml-20 sm:text-lg md:mb-5 md:text-xl lg:text-2xl">
                Sign in
            </h2>

            {/* Login Form */}
            <LoginForm />
        </div>
    );
}