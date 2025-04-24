import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle, } from "@/components/ui/card";
import { PageHeader } from "../../(shared)/_components/page-header";
import { AlertTriangle, Shield } from "lucide-react";
import { ChangePasswordForm } from "../../(shared)/_components/change-password-form";
import { DeleteAccountDialog } from "../../(shared)/_components/delete-account-dialog";


export default function Page() {
    return (
        <div className="container mx-auto py-6 px-5 font-poppins">
             {/* Settings Header */}
            <PageHeader 
                title="Account Settings"
                description="Manage your account settings and preferences"
            />

            <div className="grid gap-6">
                {/* Change Password */}
                <Card className="overflow-hidden bg-white shadow-lg">
                    <CardHeader className="bg-gradient-to-r from-main/70 to-submain/70 pb-6">
                        <CardTitle className="flex items-center gap-2 text-white">
                            <Shield className="h-6 w-6"/>
                            <span className="text-lg md:text-xl lg:text-2xl">Security Settings</span>
                        </CardTitle>

                        <CardDescription className="text-white/80 text-sm lg:text-base">
                        Keep your account secure by regularly updating your password
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <ChangePasswordForm/>
                    </CardContent>
                </Card>

                {/* Delete Account */}
                <Card className="overflow-hidden border-destructive/50 bg-white shadow-lg">
                    <CardHeader className="border-b bg-destructive/10">
                        <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-6 w-6" />
                        <span className="text-lg md:text-xl lg:text-2xl">Danger Zone</span>
                        </CardTitle>

                        <CardDescription className="text-destructive/70 text-sm lg:text-base">
                        Actions here cannot be undone. Please proceed with caution.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-6">
                        <DeleteAccountDialog/>
                    </CardContent>

                    <CardFooter className="border-t bg-destructive/5 px-6 py-4">
                        <p className="text-sm text-dashboardText">
                        Need help? Contact our support team at support@elevate.com
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}