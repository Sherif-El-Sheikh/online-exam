"use client"
import { useForm } from "react-hook-form";
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

export default function ForgotForm() {
    const form = useForm({
        defaultValues: {
        email: "",
        },
    });
    return (
        <Form {...form}>
            <form className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 2xl:w-1/2">
                            {/* Email */}
                            <FormField
                control={form.control}
                name="email"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem className="mb-8">
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

                {/* Send Mail */}
                <Button size="xl" variant="auth" type="submit" className="mb-6 sm:mb-8">
                Send Mail
                </Button>

                {/* Have an account */}
                <p className="my-4 text-center font-poppins text-sm font-normal lg:text-base">
                Remembered your password?
                    <Link href="/auth/login" className="mx-1 text-main">
                        Sign in
                    </Link>
                </p>


            </form>
        </Form>
    )
}
