"use client"

import { PasswordInput } from "@/components/common/password-input";
import { Button } from "@/components/ui/button";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormDescription,
    FormMessage, } from "@/components/ui/form";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";


export function ChangePasswordForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

        const form = useForm({
            defaultValues: {
            oldPassword: "",
            password: "",
            rePassword: "",
            },
        });

    return (
        <div className="rounded-xl bg-dashboard p-6">
            {/* Header section*/}
            <div className="mb-6 flex items-center gap-3">
                {/* Icon */}
                <div className="rounded-full bg-main/10 p-3">
                    <Lock className="h-6 w-6 text-main" />
                </div>

                {/* Description */}
                <div>
                    <h3 className="text-base md:text-lg font-semibold text-dashboardSubText">Change Password</h3>
                    <p className="text-xs lg:text-sm text-dashboardText">Update your password to keep your account secure</p>
                </div>
            </div>

            <Form {...form}>
                <form className="space-y-4">
                    {/* Old Password */}
                    <FormField
                    control={form.control}
                    name="oldPassword"
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    render={({field}) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="text-dashboardText ">Current Password</FormLabel>

                            {/* Old Password Input */}
                            <FormControl>
                                <PasswordInput/>
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    
                    {/* New Password */}
                    <FormField
                        control={form.control}
                        name="password"
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="text-dashboardText">New Password</FormLabel>

                            {/* New Password Input */}
                            <FormControl>
                            <PasswordInput/>
                            </FormControl>

                            {/* Input Description */}
                            <FormDescription className="text-dashboardText text-sm lg:text-base">
                            Password must be at least 8 characters and include uppercase, lowercase, number and special character.
                            </FormDescription>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                        {/* Confirm New Password */}
                        <FormField
                        control={form.control}
                        name="rePassword"
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        render={({ field }) => (
                        <FormItem>
                            {/* Label */}
                            <FormLabel className="text-dashboardText">Confirm New Password</FormLabel>

                            {/* Confirm New Password Input */}
                            <FormControl>
                            <PasswordInput/>
                            </FormControl>

                            {/* Feedback */}
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <Button 
                    type="submit"
                    size="default"
                    disabled={isSubmitting}
                    className="bg-main hover:bg-main/90"
                    >
                        {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Updating...
                        </>
                        ) : (
                        "Change Password"
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
