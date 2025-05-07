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
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { RegisterFields, registerSchema } from "@/lib/schemes/auth.schemes";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
        // Navigation
        const router = useRouter();

    // Register form with validation
    const form = useForm<RegisterFields>({
        defaultValues: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
        },
        resolver: zodResolver(registerSchema)
    });

    // Form submission
    const onSubmit:SubmitHandler<RegisterFields> = async (values) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    ...JSON_HEADER
                }
            })

            const data = await res.json();

            if (res.ok) {
                // onSuccess
                router.push("/auth/login")
                console.log("Success:", data.message)
            } else {
                // onError
                console.error("Error:", data.message)
            }

        } catch(error) {
            console.error("An unexpected error occurred:", error);
        }
    }

    return (
        <Form {...form}>
            <div className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 3xl:w-1/2">
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Username */}
                    <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">User Name</FormLabel>

                            {/* Username Input */}
                            <FormControl className="mb-1">
                                <VariantInput
                                {...field}
                                variant="auth"
                                type="text"
                                placeholder="User Name"
                                />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <div className="mb-3 flex items-center gap-x-2">
                    {/* First Name */}
                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                        <FormItem className="w-1/2">
                            {/* Label */}
                            <FormLabel className="sr-only">First Name</FormLabel>

                            {/* First Name Input */}
                            <FormControl >
                            <VariantInput
                                {...field}
                                variant="auth"
                                type="text"
                                placeholder="First Name"
                            />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Last Name */}
                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                        <FormItem className="w-1/2">
                            {/* Label */}
                            <FormLabel className="sr-only">last Name</FormLabel>

                            {/* Last Name Input */}
                            <FormControl >
                            <VariantInput
                                {...field}
                                variant="auth"
                                type="text"
                                placeholder="Last Name"
                            />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    </div>

                    {/* Email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Email</FormLabel>

                            {/* Email Input*/}
                            <FormControl className="mb-3">
                                <VariantInput {...field} variant="auth" type="email" placeholder="Email" />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* Phone */}
                    <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Phone</FormLabel>

                            {/* Phone Input */}
                            <FormControl className="mb-3">
                                <VariantInput {...field} variant="auth" type="tel" placeholder="Phone" />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* Passwrod */}
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Password</FormLabel>

                            {/* Passwrod Input*/}
                            <FormControl className="mb-3">
                                <PasswordInput {...field} placeholder="Password" />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* Confirm Passsword */}
                    <FormField
                    control={form.control}
                    name="rePassword"
                    render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="sr-only">Confirm Password</FormLabel>

                            {/* Confirm Passwrod Input*/}
                            <FormControl className="mb-3">
                                <PasswordInput {...field} placeholder="Confirm Passsword" />
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    {/* Have an account */}
                    <p className="my-4 text-center font-poppins text-sm font-normal lg:text-base">
                    Already have an account?
                        <Link href="/auth/login" className="mx-2 text-main">
                            Sign in
                        </Link>
                    </p>

                    {/* Sign up */}
                    <Button size="xl" variant="auth" type="submit" className="mb-5 sm:mb-7" 
                    disabled={form.formState.isSubmitted && !form.formState.isValid}
                    >
                    Create Account
                    </Button>
                </form>
                
                {/* Continue With */}
                <AuthSocial />
            </div>
        </Form>
    );
}
