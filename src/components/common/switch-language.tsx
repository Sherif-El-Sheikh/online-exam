import { Check, ChevronDown, Languages } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

interface SwitchLanguageProps {
    className?: string;
}

export default function SwitchLanguage({className}: SwitchLanguageProps) {
    // Language options
    const languages = [
        {code: "en", name: "English"},
        {code: "ar", name: "العربية"}
    ]

    return (
        <DropdownMenu>
            {/* Trigger */}
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className={`px-2 gap-1 focus:ring-0 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-1 ${className}`}>

                {/* Language icon */}
                <Languages className="max-[375px]:!size-3 md:!h-5 md:!w-5"/>

                {/* Language Name */}
                <span className="font-inter font-medium max-[375px]:text-[0.685rem] text-sm md:text-base lg:text-xl">Eng</span>

                {/* Chevron Icon */}
                <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>

            {/* Dropdown Content */}
            <DropdownMenuContent align="end" className="font-inter font-medium text-sm md:text-base lg:text-xl">
                {languages.map((language) => (
                <DropdownMenuItem key={language.code} className="max-[375px]:text-[0.685rem]">
                    {language.name}
                    <Check/>
                </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
