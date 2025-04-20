import { Avatar, AvatarFallback} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import avatar from "../../../../../public/assets/images/avatar.png"
import Image from 'next/image'
import { LogOut, Settings, User } from "lucide-react";

export function UserNav() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8">
                    <Avatar className="h-10 w-10 md:h-12 md:w-12">
                    {/* Extract the image path string from the imported image object */}
                    <Image
                    src={avatar}
                    alt="User avatar"
                    width={100}
                    height={100}
                    className="rounded-full object-cover"
                    placeholder="blur" // Blurred preview before loading full image
                    priority // Ensures image loads early
                    />
                        <AvatarFallback>SH</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 mt-3" align="end" forceMount>
            {/* User Information */}
                <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    {/* User's name */}
                    <p className="text-sm font-medium leading-none">Shreif ElSheikh</p>

                    {/* User's email */}
                    <p className="text-xs leading-none text-muted-foreground">Sherif@example.com</p>
                </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator/>

                {/* Grouping Profile and Settings */}
                    <DropdownMenuGroup>
                        {/* Profile */}
                        <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4"/>
                            <span>Profile</span>
                        </DropdownMenuItem>

                        {/* Settings */}
                        <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4"/>
                            <span>Settings</span>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>

                <DropdownMenuSeparator/>

                {/* Log Out */}
                <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4"/>
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
