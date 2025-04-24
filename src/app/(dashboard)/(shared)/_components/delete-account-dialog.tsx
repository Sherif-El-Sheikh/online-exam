"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";


export function DeleteAccountDialog() {
    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <div className="rounded-xl border-2 border-destructive/20 p-6">
            {/* Header and description for the delete account section */}
            <div className="mb-6">
                <h3 className="text-lg font-medium text-destructive">Delete Account</h3>
                <p className="text-sm text-dashboardText">
                    Once you delete your account, there is no going back. All of your data will be permanently removed.
                </p>
            </div>

            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="default" className="w-full sm:w-auto text-base md:text-lg">
                        Delete Account
                    </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>

                        <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove all your data from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel className="h-10 px-4 py-2">Cancel</AlertDialogCancel>

                        <AlertDialogAction
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2"
                        disabled={isDeleting}
                        >
                            {isDeleting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Deleting...
                            </>
                        ) : (
                            "Delete Account"
                        )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}
