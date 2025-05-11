"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateLastname } from "@/lib/actions/profile/update-lastname";
import { lastNameField, lastNameSchema } from "@/lib/schemes/last-name.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Edit, Loader2, X } from "lucide-react";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function EditProfile({ lastName: initialLastName }: { lastName: string }) {
    // State for last name
    const [lastName, setLastName] = useState(initialLastName);

    // State to toggle edit mode
    const [editMode, setEditMode] = useState(false);

    // State to handle transitions and pending updates
    const [isPending, startTransition] = useTransition();

    // Last name input with validation
    const form = useForm<lastNameField>({
        defaultValues: {
            lastName: initialLastName
        },
        resolver: zodResolver(lastNameSchema)
    })

    // Last name submission
    const onSubmit:SubmitHandler<lastNameField> = async (values) => {
        startTransition(async () => {
            try {
                const res = await updateLastname(values.lastName)
                setLastName(res.lastName)
                setEditMode(false);
            } catch (error) {
                console.error("An unexpected error occurred:", error);
            }
        })
    }

        // Cancel edit mode and revert the last name to its original value
        const handleCancel = () => {
            setLastName(lastName);
            setEditMode(false);
        }

    return (
        <div className="grid gap-2">
            {/* Label */}
            <Label htmlFor="lastName" className="">
            Last Name
            </Label>

            <div className="flex items-center gap-2 w-full">
                {editMode ? (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-between gap-2 w-full">
                            <FormField 
                            control={form.control}
                            name="lastName"
                            render={({field}) => (
                                <FormItem className="flex-1">
                                    {/* Editable input field */}
                                    <FormControl >
                                        <Input
                                        id="lastName"
                                        {...field}
                                        />
                                    </FormControl>

                                    {/* Feedback */}
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                        {/* Cancel and Save buttons */}
                        <div className="flex gap-2 mb-3">
                        <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={handleCancel}
                        className="border-main text-main hover:bg-main/10"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                            
                            <Button
                            type="submit"
                            size="icon"
                            disabled={form.formState.isSubmitted && !form.formState.isValid}
                            className="bg-main hover:bg-main/90"
                            >
                                {isPending ? (
                                    <Loader2 className="h-4 w-4 animate-spin"/>
                                ) : (
                                    <Check className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                        </form>

                    </Form>
                    )
                    :

                    (
                        <>
                        {/* Read-only input */}
                        <Input
                        id="lastName"
                        value={lastName}
                        disabled
                        className="bg-white"
                        />
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setEditMode(true)}
                            className="border-main text-main hover:bg-main/10"
                        >
                            <Edit className="h-4 w-4" />
                        </Button>
                        </>
                    )
                }
            </div>
        </div>
    )
}
