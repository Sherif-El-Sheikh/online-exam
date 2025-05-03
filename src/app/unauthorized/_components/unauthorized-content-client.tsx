"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {} from "@/components/ui/card";
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    dashboardPath: string;
}

export default function UnauthorizedContentClient({ dashboardPath }: Props) {
    // Navigation
    const router = useRouter();
    const searchParams = useSearchParams();

    // State to track if the user is authorized
    const [isAuthorized, setIsAuthorized] = useState(false);

    // State to track if the authorization check is ongoing
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);


    useEffect(() => {
        // Get the complex query from URL using authKey
        const complexKey = "authKey"
        const complexValue = searchParams.get(complexKey)

        if (complexValue) {

            // Check if the authKey contains a period mark
            if (complexValue.includes(".")) {
                // If it contains a period mark, allow page access
                setIsAuthorized(true);

                // Replace the period mark in the authKey value and update the URL
                const updatedUrl = new URL(window.location.href);
                updatedUrl.searchParams.set(complexKey,complexValue.replace(".", "&dp=*y?i,"));

                // Update the browser's URL with the new query string
                window.history.replaceState({}, "", updatedUrl.toString());

                // Make authentication check as complete
                setIsCheckingAuth(false);
            } else {
                // If the value doesn't contain a period
                router.replace("/");
            }

        } else {
         // If the authKey is not found
        router.replace("/"); 
        }

    }, [searchParams, router]);

    //If the user is not authorized
    if (isCheckingAuth || !isAuthorized) {
        return <div className="min-h-screen bg-background" />;
    }

    // Handle going back to the appropriate dashboard
    const handleGoBack = () => {
        router.replace(dashboardPath);
    };

    return (
        <Card className="border-border shadow-lg duration-500 animate-in fade-in">
        <CardHeader className="pb-8">
            <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-8 w-8 text-red-500" />
            </div>
            <h1 className="text-center text-xl font-bold text-red-500 sm:text-2xl">
            Access Denied
            </h1>
        </CardHeader>

        <CardContent className="space-y-8 text-center">
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-destructive/20">
            <div className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-destructive"></div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <AlertTriangle className="h-4 w-4" />
            <p>Insufficient permissions</p>
            </div>

            <p className="text-[13px] text-muted-foreground min-[400px]:text-sm">
            You do not have the necessary permissions to access this area.
            </p>
            <p className="text-[13px] text-muted-foreground min-[400px]:text-sm">
            Please contact your administrator if you believe this is an error.
            </p>
        </CardContent>

        <CardFooter className="flex justify-center pb-6 pt-2">
            <Button
            variant="destructive"
            size="lg"
            className="font-medium"
            onClick={handleGoBack}
            >
            Back to Dashboard
            </Button>
        </CardFooter>
        </Card>
    );
}
