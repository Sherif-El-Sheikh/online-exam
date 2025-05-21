import SetPasswordForm from "./_components/set-password-form";

export default function Page() {
  return (
    <div className="px-3 py-2 md:mt-20 md:max-lg:px-0 2xl:mt-28">
      {/* Title */}
      <h2 className="mb-3 font-inter text-base font-bold min-[576px]:max-md:ml-20 sm:text-lg md:mb-5 md:text-xl lg:text-2xl">
        Set a Password
      </h2>

      {/* Set Password Form */}
      <SetPasswordForm />
    </div>
  );
}
