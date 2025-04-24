import { Card,   CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle } from "@/components/ui/card";
import {PageHeader} from "./page-header";
import { AvatarPlaceholder } from "../../user-dashboard/_components/avatar-placeholder";
import { format } from "date-fns";
import { CalendarDays, Mail, Phone, UserIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EditProfile from "./edit-profile";


export function ProfileInfo({user}: UserProfileProps) {
    const createdDate = new Date(user.createdAt);
    return (
        <div className="container mx-auto py-6 px-5 font-poppins">
            {/* Header of the profile page */}
            <PageHeader
                title="Profile"
                description="View and manage your profile information"
            />

            <div className="grid gap-6">
                <Card className="overflow-hidden bg-white shadow-lg">
                     {/* Card header with user basic info */}
                    <CardHeader className="bg-gradient-to-r from-main/70 to-submain/70 text-white">
                        <div className="flex items-center gap-4">
                            {/* User Avatar */}
                            <AvatarPlaceholder name={user.username} className="!h-20 !w-20"/>

                            {/* Title and Description */}
                            <div>
                            <CardTitle className="text-xl lg:text-2xl">
                                {user.firstName} {user.lastName}
                            </CardTitle>

                            <CardDescription className="text-white/80">
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)} • Joined {format(createdDate, "MMMM yyyy")}
                            </CardDescription>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-8 p-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            {/* Username */}
                            <div className="rounded-xl bg-gradient-to-br from-[#f6f6f8] to-[#fffafa] p-4 shadow-sm">
                                <div className="flex md:max-lg:flex-col md:max-lg:justify-center items-center gap-3">
                                    {/* Icon */}
                                    <div className="rounded-full bg-main/10 p-3">
                                    <UserIcon className="h-6 w-6 text-main"/>
                                    </div>

                                    {/* User Name Info */}
                                    <div>
                                        <p className="font-medium md:max-lg:text-center md:max-lg:mb-2 text-dashboardSubTex">
                                        Username
                                        </p>
                                        <p className="text-dashboardText font-medium text-[13px] lg:text-base">{user.username}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="rounded-xl bg-gradient-to-br from-[#f6f6f8] to-[#fffafa] p-4 shadow-sm">
                                <div className="flex md:max-lg:flex-col md:max-lg:justify-center items-center gap-3">
                                    {/* Icon */}
                                    <div className="rounded-full bg-main/10 p-3">
                                    <Mail className="h-6 w-6 text-main"/>
                                    </div>
                                    
                                    {/* Email Info */}
                                    <div>
                                        <p className="font-medium md:max-lg:text-center md:max-lg:mb-2 text-dashboardSubTex">
                                        Email
                                        </p>
                                        <p className="text-dashboardText font-medium text-[13px] lg:text-base">{user.email}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="rounded-xl bg-gradient-to-br from-[#f6f6f8] to-[#fffafa] p-4 shadow-sm">
                                <div className="flex md:max-lg:flex-col md:max-lg:justify-center items-center gap-3">
                                    {/* Icon */}
                                    <div className="rounded-full bg-main/10 p-3">
                                    <Phone className="h-6 w-6 text-main"/>
                                    </div>

                                    {/* Phone Info */}
                                    <div>
                                        <p className="font-medium md:max-lg:text-center md:max-lg:mb-2 text-dashboardSubTex">
                                        Phone
                                        </p>
                                        <p className="text-dashboardText font-medium text-[13px] lg:text-base">{user.phone}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Joined */}
                            <div className="rounded-xl bg-gradient-to-br from-[#f6f6f8] to-[#fffafa] p-4 shadow-sm">
                                <div className="flex md:max-lg:flex-col md:max-lg:justify-center items-center gap-3">
                                    {/* Icon */}
                                    <div className="rounded-full bg-main/10 p-3">
                                    <CalendarDays className="h-6 w-6 text-main"/>
                                    </div>

                                    {/* Join Date Info */}
                                    <div>
                                        <p className="font-medium md:max-lg:text-center md:max-lg:mb-2 text-dashboardSubTex">
                                        Joined
                                        </p>
                                        <p className="text-dashboardText font-medium text-[13px]  lg:text-base">{format(createdDate, "PPP")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section for edit profile */}
                        <div className="rounded-xl bg-gradient-to-br from-[#f6f6f8] to-[#fffafa] p-6 shadow-sm">
                            <h3 className="mb-6 text-xl font-semibold text-dashboardSubText">
                            Edit Profile
                            </h3>

                            {/* First Name */}
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="firstName" className="text-dashboardText">First Name</Label>
                                    <Input
                                    id="firstName"
                                    value={user.firstName}
                                    disabled
                                    className="bg-white"
                                    />
                                </div>
                                
                                <EditProfile lastName={user.lastName}/>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="px-6 py-4">
                        <p className="text-sm text-dashboardText">
                        Some account information may not be editable. Please contact support for assistance.
                        </p>
                    </CardFooter>
                </Card>
            </div>

        </div>
    )
}
