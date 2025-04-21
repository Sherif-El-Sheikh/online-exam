import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils/tailwind-merge";

interface AvatarPlaceholderProps {
    name: string;
    className?: string;
}

export function AvatarPlaceholder({name, className}: AvatarPlaceholderProps) {

    const initials = name.split(" ").join("").toUpperCase().substring(0, 2);

    return (
        <Avatar className={cn("h-32 w-32", className)}>
            <AvatarFallback className="text-white font-semibold relative overflow-hidden shadow-inner bg-user-avatar bg-cover bg-center bg-no-repeat">
                <span className="text-slate-100 text-lg">{initials}</span>
            </AvatarFallback>
        </Avatar>
    )
}
