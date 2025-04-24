'use client';

import { Button } from "@/components/ui/button";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
            <main>
                <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F9FE] p-4">
                    <div className="text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="rounded-full bg-destructive/10 p-6">
                                <AlertTriangle className="h-12 w-12 text-destructive" />
                            </div>
                        </div>
                        
                        <h1 className="mb-2 text-4xl font-bold text-destructive">
                        Something went wrong!
                        </h1>
                        <p className="mb-4 text-lg text-dashboardText">
                        {error.message || "An unexpected error occurred"}
                        </p>
                        {error.digest && (
                        <p className="mb-8 text-sm text-dashboardSubText">
                            Error ID: {error.digest}
                        </p>
                        )}
                        
                        <div className="space-x-4">
                        <Button
                        size="default"
                            onClick={() => reset()}
                            className="bg-main px-8 hover:bg-main/90"
                        >
                            <RotateCcw className="mr-2 h-4 w-4" />
                            Try Again
                        </Button>

                        <Button
                        size="default"
                            variant="outline"
                            asChild
                            className="border-main text-main hover:bg-main/10"
                        >
                            <Link href="/">
                            <Home className="mr-2 h-4 w-4" />
                            Back to Home
                            </Link>
                        </Button>
                        </div>
                    </div>
                </div>
                </main>

    );
}