"use client";
import { PasswordInput } from "@/components/common/password-input";
import { VariantInput } from "@/components/common/variant-input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { setPasswordFields, setPasswordSchema } from "@/lib/schemes/auth.schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SetPasswordForm() {
        // Navigation
        const router = useRouter();
    
    // Set password form with validation
    const form = useForm<setPasswordFields>({
        defaultValues: {
        email: "",
        newPassword: ""
        },
        resolver: zodResolver(setPasswordSchema)
    });

        // Form submission
        const onSubmit:SubmitHandler<setPasswordFields> = async (values) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/resetPassword`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        ...JSON_HEADER
                    }
                })

                const data = await res.json()

                if(res.ok) {
                    // onSuccess
                    router.push("/auth/login")
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
                {/* Email */}
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem className="mb-5">
                        {/* Label */}
                        <FormLabel className="sr-only">Email</FormLabel>

                        {/* Email Input */}
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

                {/* New Password */}
                <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                    <FormItem className="mb-4">
                        {/* Label */}
                        <FormLabel className="sr-only">New Password</FormLabel>

                        {/* New Password Input */}
                        <FormControl className="mb-5">
                            <PasswordInput {...field} placeholder="New Password" />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Save New Password */}
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8"
                disabled={form.formState.isSubmitted && !form.formState.isValid}
                >
                Save New Password
                </Button>

                {/* Back To Sign In */}
                <p className="my-4 text-center font-poppins text-sm font-normal lg:text-base">
                Back to
                    <Link href="/auth/login" className="mx-2 text-main">
                        Sign in
                    </Link>
                </p>
            </form>
        </Form>
    );
}
