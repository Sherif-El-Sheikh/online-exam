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

export default function RegisterForm() {
    const form = useForm({
        defaultValues: {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
        },
    });

    return (
        <Form {...form}>
            <form className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 2xl:w-1/2">
                {/* Username */}
                <FormField
                control={form.control}
                name="username"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem>
                        {/* Label */}
                        <FormLabel className="sr-only">User Name</FormLabel>

                        {/* Username Input */}
                        <FormControl className="mb-2">
                            <VariantInput
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

                <div className="mb-4 flex items-center gap-2">
                {/* First Name */}
                <FormField
                    control={form.control}
                    name="firstName"
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    render={({ field }) => (
                    <FormItem className="w-1/2">
                        {/* Label */}
                        <FormLabel className="sr-only">First Name</FormLabel>

                        {/* First Name Input */}
                        <FormControl>
                        <VariantInput
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
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    render={({ field }) => (
                    <FormItem className="w-1/2">
                        {/* Label */}
                        <FormLabel className="sr-only">last Name</FormLabel>

                        {/* Last Name Input */}
                        <FormControl>
                        <VariantInput
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem>
                        {/* Label */}
                        <FormLabel className="sr-only">Email</FormLabel>

                        {/* Email Input*/}
                        <FormControl className="mb-4">
                            <VariantInput variant="auth" type="email" placeholder="Email" />
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem>
                        {/* Label */}
                        <FormLabel className="sr-only">Phone</FormLabel>

                        {/* Phone Input */}
                        <FormControl className="mb-4">
                            <VariantInput variant="auth" type="tel" placeholder="Phone" />
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem>
                        {/* Label */}
                        <FormLabel className="sr-only">Password</FormLabel>

                        {/* Passwrod Input*/}
                        <FormControl className="mb-4">
                            <PasswordInput placeholder="Password" />
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem>
                        {/* Label */}
                        <FormLabel className="sr-only">Confirm Password</FormLabel>

                        {/* Confirm Passwrod Input*/}
                        <FormControl className="mb-4">
                            <PasswordInput placeholder="Confirm Passsword" />
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
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8">
                Create Account
                </Button>

                {/* Continue with */}
                <AuthSocial />
            </form>
        </Form>
    );
}
