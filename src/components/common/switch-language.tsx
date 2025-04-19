import { Check, ChevronDown, Languages } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

export default function SwitchLanguage() {
    // Language options
    const languages = [
        {code: "en", name: "English"},
        {code: "ar", name: "العربية"}
    ]

    return (
        <DropdownMenu>
            {/* Trigger */}
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="px-2 gap-1 focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-1">

                {/* Language icon */}
                <Languages className="md:!h-5 md:!w-5"/>

                {/* Language Name */}
                <span className="font-inter font-medium text-sm md:text-base lg:text-xl">English</span>

                {/* Chevron Icon */}
                <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>

            {/* Dropdown Content */}
            <DropdownMenuContent align="end" className="font-inter font-medium text-sm md:text-base lg:text-xl">
                {languages.map((language) => (
                <DropdownMenuItem key={language.code}>
                    {language.name}
                    <Check/>
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
