"use client"
import { PasswordInput } from "@/components/common/password-input";
import { VariantInput } from "@/components/common/variant-input";
import AuthSocial from "@/components/features/auth/auth-social";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function LoginForm() {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    return (
        <Form {...form}>
            <form className="min-[576px]:max-md:w-3/4 md:w-3/4 lg:w-3/4 xl:w-4/6 2xl:w-1/2 min-[576px]:max-md:mx-auto">
                {/* Email */}
                <FormField
                control={form.control}
                name="email"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({field}) => (
                    <FormItem className="mb-5">
                        {/* Label */}
                        <FormLabel className="sr-only">email</FormLabel>

                        
                        {/* Email Input */}
                        <FormControl className=" ">
                            <VariantInput variant="auth" 
                            type="email"
                            placeholder="Enter Email"
                            />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage/>
                    </FormItem>
                )}
                />

                {/* Password */}
                <FormField
                control={form.control}
                name="password"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({field}) => (
                    <FormItem className="mb-4">
                        {/* Label */}
                        <FormLabel className="sr-only">password</FormLabel>

                        {/* Password Input */}
                        <FormControl>
                            <PasswordInput 
                            placeholder="Password"
                            />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Recover Password ? */}
                <Link href="/auth/forgot-password" className="text-end flex justify-end font-poppins font-normal text-sm lg:text-base text-main mb-6 ">
                Recover Password ?
                </Link>

                {/* Sign in */}
                <Button size="xl" variant="auth" type="submit" className="mb-8">
                Sign in
                </Button>

                {/* Continue with */}
                <AuthSocial/>
            </form>
        </Form>
    )
}
