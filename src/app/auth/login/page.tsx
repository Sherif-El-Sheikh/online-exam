import LoginForm from "./_components/login-form";


export default function Page() {
    return (
        <div className="px-3 py-2">
            {/* Title */}
            <h2 className="mb-3 font-inter text-base font-bold sm:text-lg md:mb-5 md:mt-20 md:text-xl lg:text-2xl min-[576px]:max-md:ml-20">
            Sign in
            </h2>

            {/* Login Form */}
            <LoginForm />
        </div>
    );
}
















// "use client"
// import imag from '../../../../public/assets/images/89b7d9a2fbcfd109b058718b5287b696.jpeg'
// import { PasswordInput } from "@/components/common/password-input";
// import { VariantInput } from "@/components/common/variant-input";
// import { Button } from "@/components/ui/button";
// import Image from 'next/image';

// export default function Page() {
//     return (
//         <div className=' p-2 '>
//         <div className='flex items-center gap-3 sm:gap-8'>
//                 <div className='w-[80px] sm:w-[193px]'>
// etjs
// </div>
//                 <div className=" flex items-center justify-around w-full gap-3 md:gap-5 lg:gap-6">
                    
//                     <VariantInput variant="search" placeholder="Search Quiz" className=""/>
//             {/* <PasswordInput placeholder="Password" className="mb-4"/> */}
//             <Button  variant={'startQuiz'}>start Quiz</Button>
                    

//             <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 overflow-hidden rounded-full">
//   <Image
//     src={imag}
//     alt="prof"
//     className="w-full h-full object-cover object-top"
//     width={61}
//     height={61}
//   />
// </div>

//         </div>
//         </div>
//         </div>



//     );
// }