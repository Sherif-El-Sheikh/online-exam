import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/tailwind-merge";
import { SearchIcon } from "lucide-react";

//Types for the variants
type StyledInputVariant = "auth" | "search" | "diploma" | "question";

// Interface for the props to be passed to the component
interface VariantInputProps extends React.ComponentProps<typeof Input> {
    variant?: StyledInputVariant;
}

//Styles for each variant
const variantStyles: Record<StyledInputVariant, string> = {
    auth:"h-10 sm:h-12 rounded-lg border border-slate-300 px-3 py-4 text-sm/6 sm:text-base/6 placeholder:text-slate-500 placeholder:text-sm/6 sm:placeholder:text-base/6 focus-visible:ring-2 focus-visible:ring-submain shadow-auth-input bg-slate-50",
    search:
    "h-12 sm:h-14 rounded-[1.3rem] border-none shadow-search py-4 px-16 text-base/[100%] sm:text-lg/[100%] placeholder:text-base/[100%] sm:placeholder:text-lg/[100%] focus-visible:ring-1 focus-visible:ring-submain",
    diploma:
    "h-10 rounded-2xl border border-slate-400 focus-visible:ring-1 focus-visible:border-none focus-visible:ring-main p-3",
    question:
    "h-10 rounded-2xl border border-slate-400 focus-visible:ring-1 focus-visible:border-none focus-visible:ring-main py-3 px-7",
};

const VariantInput = React.forwardRef<HTMLInputElement, VariantInputProps>(
    ({ className, variant, ...props }, ref) => {
        //Determine the correct style based on the variant
        const variantClass = variant ? variantStyles[variant] : "";

    return (
        <div className="relative">

            {/* Render search icon for 'search' variant */}
            {variant === "search" && (
            <SearchIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-blue-700 sm:h-6 sm:w-6" />
            )}

            {/* Render input with the selected variant */}
            <Input 
            ref={ref}
            className={cn(variantClass, className)}
            {...props} />
        </div>
        );
    },
);

VariantInput.displayName = "VariantInput";

export { VariantInput };
