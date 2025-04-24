"use client"

import { VariantInput } from "@/components/common/variant-input";
import { usePathname } from "next/navigation";
import { shouldShowSearch } from "@/lib/utils/show-search";

export function SearchInput() {
    const pathname = usePathname();

    if (!shouldShowSearch(pathname)) return (
            <div className="text-muted-foreground font-inter max-[400px]:text-xs text-sm font-medium flex-col lg:items-center lg:flex-row flex gap-x-2 ml-3">
                <span className="font-semibold capitalize text-primary sm:text-base md:text-lg lg:text-2xl">Welcome Sherif 👋</span> 
                <span className="max-[430px]:text-[10px]">Ready for your next challenge?</span>
            </div>
);

    return (
        <VariantInput variant="search" placeholder="Search Quiz"/>
    )
}
