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
import { zodResolver } from "@hookform/resolvers/zod";
import { VerifyCodeField, verifyCodeSchema } from "@/lib/schemes/auth.schemes";
import { JSON_HEADER } from "@/lib/constants/api.constants";
import { useRouter } from "next/navigation";
import { resendCode } from "../_utils/resend-code";
import { useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";
import useTimer from "../_hooks/use-timer";

export default function VerifyForm() {
    // Navigation
    const router = useRouter();

    // Get email from localStorage (only available on client side)
    const email = typeof window !== "undefined" ? localStorage.getItem("email") : null;

    // Start a 10-minute timer
    const {timer, isResendDisabled, resetTimer} = useTimer(600)


    useEffect(() => {
        const sentTime = getCookie("sentTime");
        if (sentTime) {
            // Calculate how many seconds have passed since the code was sent
            const elapsedTime = (Date.now() - parseInt(sentTime as string)) / 1000;

            // Subtract the elapsed time from the total
            const remaining = 600 - elapsedTime;

            // If time is still remaining, update the timer to continue countdown
            if (remaining > 0) {
                resetTimer(remaining)
            }
        }
    }, [resetTimer]);


    // Verify code form with validation
    const form = useForm<VerifyCodeField>({
        defaultValues: {
        resetCode: "",
        },
        resolver: zodResolver(verifyCodeSchema)
    });

    // Form submission
    const onSubmit:SubmitHandler<VerifyCodeField> = async (values) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verifyResetCode`, {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    ...JSON_HEADER
                }
            })

            const data = await res.json();

            if(res.ok) {
                // onSuccess
                router.push("/auth/set-password")
                localStorage.removeItem("email");
                console.log("Success:", data.status)
            } else {
                // onError
                console.error("Error:", data.message)
            }
        } catch (error) {
            console.log("An unexpected error occurred:", error)
        }
    }

    const handleResendCode = () => {
        if (!email) {
            console.error("❌ Email is missing. Cannot resend code.")
            setTimeout(() => {
                router.push("/auth/forgot-password");
            }, 3000)
            return
        } else {
            // Resend the verification code using the provided email
            resendCode(email!);

             // Restart the resend timer for 10 minutes
            resetTimer(600);
            
            // Store the current time
            setCookie("sentTime", Date.now().toString(), { maxAge: 600 })
        }
    }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="min-[576px]:max-md:mx-auto min-[576px]:max-md:w-3/4 md:w-4/5 lg:w-3/4 xl:w-4/6 3xl:w-1/2">
                {/* Verify Code */}
                <FormField
                control={form.control}
                name="resetCode"
                render={({ field }) => (
                    <FormItem className="mb-8">
                        {/* Label */}
                        <FormLabel className="sr-only">Verify Code</FormLabel>

                        {/* Verify Code Input */}
                        <FormControl>
                            <VariantInput
                            {...field}
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

                {/* Have An Account */}
                <p className="mt-4 mb-6 text-end font-poppins text-sm font-normal lg:text-base">
                Didn’t receive a code?
                {isResendDisabled ? (
                <span className="ml-2 text-main">
                    {`${Math.floor(timer / 60)}:${String(Math.floor(timer % 60)).padStart(2, "0")}`}
                </span>)
                :
                (
                    <Button variant="ghost" className="mx-2 text-main hover:text-main hover:bg-transparent"
                    onClick={handleResendCode}
                    disabled={isResendDisabled}
                    >
                        Resend
                    </Button>
                )
            }
                </p>

                {/* Verify Code */}
                <Button size="xl" variant="auth" type="submit" 
                disabled={form.formState.isSubmitted && !form.formState.isValid}
                >
                Verify
                </Button>
            </form>
        </Form>
    )
}
