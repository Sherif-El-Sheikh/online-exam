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
    auth:"sm:w-[410px] h-10 sm:h-12 rounded-lg border border-slate-300 px-3 py-4 text-sm/6 sm:text-base/6 placeholder:text-slate-500 placeholder:text-sm/6 sm:placeholder:text-base/6 focus-visible:ring-2 focus-visible:ring-submain shadow-auth-input bg-slate-50 font-inter font-medium",
    search:
    "md:w-[370px] min-[990px]:w-[540px] lg:w-[590px] xl:w-[760px] h-10 sm:h-12 md:h-14 rounded-[1.3rem] border-none shadow-search py-4 px-8 sm:px-16 text-sm/[100%] md:text-base/[100%] lg:text-lg/[100%] placeholder:text-xs/[100%] sm:placeholder:text-sm/[100%] md:placeholder:text-base/[100%] lg:placeholder:text-lg/[100%] focus-visible:ring-1 focus-visible:ring-submain font-poppins font-normal",
    diploma:
    "w-60 h-10 rounded-2xl border border-slate-400 focus-visible:ring-1 focus-visible:border-none focus-visible:ring-main p-3 font-inter font-semibold",
    question:
    "sm:w-[620px] md:w-[673px] h-10 rounded-2xl border border-slate-400 focus-visible:ring-1 focus-visible:border-none focus-visible:ring-main py-3 px-7 font-inter font-semibold",
};

const VariantInput = React.forwardRef<HTMLInputElement, VariantInputProps>(
    ({ className, variant, ...props }, ref) => {
        //Determine the correct style based on the variant
        const variantClass = variant ? variantStyles[variant] : "";

    return (
        <div className="relative">
            {/* Render search icon for 'search' variant */}
            {variant === "search" && (
            <SearchIcon className="absolute left-2 sm:left-4 top-1/2 h-4 w-4 sm:h-5 sm:w-5 -translate-y-1/2 transform text-blue-700 lg:h-6 lg:w-6 " />
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
