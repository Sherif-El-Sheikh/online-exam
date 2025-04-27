"use client";
import { PasswordInput } from "@/components/common/password-input";
import { VariantInput } from "@/components/common/variant-input";
import AuthSocial from "@/components/features/auth/auth-social";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {getSession, signIn} from "next-auth/react"
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
    const form = useForm({
        defaultValues: {
        email: "",
        password: "",
        },
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

    const onSubmit = async (values: {email: string, password: string}) => {
        // Attempt to sign in with provided credentials
        const response = await signIn("credentials", {
            // Redirect URL after successful login
            callbackUrl: callbackUrl || "/",
            // Prevent automatic redirect
            redirect: false,
            email: values.email,
            password: values.password
        })

        console.log(response)
        if(response?.ok) {
            // Get the current session to retrieve the user's data
            const session = await getSession();
            const role = session?.user?.role;

            // Redirect to the appropriate page based on the callbackUrl
            if (callbackUrl) {
                window.location.href = callbackUrl;
            } else {

                    // If no callbackUrl, redirect to the respective dashboard
                    if (role === "admin") {
                        window.location.href = "/admin-dashboard";
                    } else {
                        window.location.href = "/user-dashboard";
                    }
                }
            } else {
                // If login failed, log the error
                console.log("Login failed", response?.error);
            }
        }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 3xl:w-1/2">
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

                {/* Password */}
                <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem className="mb-4">
                        {/* Label */}
                        <FormLabel className="sr-only">Password</FormLabel>

                        {/* Password Input */}
                        <FormControl>
                            <PasswordInput {...field} placeholder="Password" />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Recover Password ? */}
                <Link
                href="/auth/forgot-password"
                className="mb-6 flex justify-end text-end font-poppins text-sm font-normal text-main lg:text-base"
                >
                Recover Password ?
                </Link>

                {/* Sign In */}
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8">
                Sign in
                </Button>

                {/* Continue With */}
                <AuthSocial />
            </form>
        </Form>
    );
}
