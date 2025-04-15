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


export default function VerifyForm() {
    const form = useForm({
        defaultValues: {
        resetCode: "",
        },
    });
    return (
        <Form {...form}>
            <form className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 2xl:w-1/2">
                {/* Verify Code */}
                <FormField
                control={form.control}
                name="resetCode"
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                render={({ field }) => (
                    <FormItem className="mb-8">
                        {/* Label */}
                        <FormLabel className="sr-only">Verify Code</FormLabel>

                        {/* Verify Code Input */}
                        <FormControl>
                            <VariantInput
                            variant="auth"
                            type="text"
                            placeholder="Enter Code"
                            />
                        </FormControl>

                        {/* Feedback */}
                        <FormMessage />
                    </FormItem>
                )}
                />

                {/* Have an account */}
                <p className="mt-4 mb-6 text-end font-poppins text-sm font-normal lg:text-base">
                Didn’t receive a code?
                    <Button variant="ghost" className="mx-2 text-main hover:text-main hover:bg-transparent">
                        Resend
                    </Button>
                </p>

                {/* Send Mail */}
                <Button size="xl" variant="auth" type="submit">
                Verify
                </Button>
            </form>
        </Form>
    )
}
