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
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SetPasswordForm() {
    const form = useForm({
        defaultValues: {
        email: "",
        newPassword: "",
        },
    });

    return (
        <Form {...form}>
            <form className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 3xl:w-1/2">
                {/* Email */}
                <FormField
                control={form.control}
                name="email"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem className="mb-5">
                        {/* Label */}
                        <FormLabel className="sr-only">Email</FormLabel>

                        {/* Email Input */}
                        <FormControl>
                            <VariantInput
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem className="mb-4">
                        {/* Label */}
                        <FormLabel className="sr-only">New Password</FormLabel>

                        {/* New Password Input */}
                        <FormControl className="mb-5">
                            <PasswordInput placeholder="New Password" />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Save New Password */}
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8">
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
