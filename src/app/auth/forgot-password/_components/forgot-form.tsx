"use client"
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { VariantInput } from "@/components/common/variant-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordField, forgotPasswordSchema} from "@/lib/schemes/auth.schemes";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

export default function ForgotForm() {
        // Navigation
        const router = useRouter();

    // Forgot password form with validation
    const form = useForm<ForgotPasswordField>({
        defaultValues: {
        email: "",
        },
        resolver: zodResolver(forgotPasswordSchema)
    });

    // Form submission
    const onSubmit:SubmitHandler<ForgotPasswordField> = async (values) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgotPassword`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    ...JSON_HEADER
                }
            })

            const data = await res.json();

            if(res.ok) {
                // onSuccess
                router.push("/auth/verify-code")
                localStorage.setItem("email", values.email);
                // Store the current time in a cookie
                setCookie("sentTime", Date.now().toString(), {maxAge: 600})
                console.log("Success:", data.message)
            } else {
                // onError
                console.error("Error:", data.message)
            }

        } catch (error) {
            console.log("An unexpected error occurred:", error)
        }
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 3xl:w-1/2">
                {/* Forgot */}
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="mb-8">
                        {/* Label */}
                        <FormLabel className="sr-only">Email</FormLabel>

                        {/* Forgot Input */}
                        <FormControl>
                            <VariantInput
                            {...field}
                            variant="auth"
                            type="email"
                            placeholder="Enter Email"
                            />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Send Mail */}
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8" 
                disabled={form.formState.isSubmitted && !form.formState.isValid}
                >
                Send Mail
                </Button>

                {/* Remembered Your Password */}
                <p className="my-4 text-center font-poppins text-sm font-normal lg:text-base">
                Remembered your password?
                    <Link href="/auth/login" className="mx-2 text-main">
                        Sign in
                    </Link>
                </p>


            </form>
        </Form>
    )
}
