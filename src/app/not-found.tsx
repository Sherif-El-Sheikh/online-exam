import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
            <main>
                <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F9FE] p-4">
                    <div className="text-center">
                        <div className="mb-8 flex justify-center">
                            <div className="rounded-full bg-main/10 p-6">
                                <FileQuestion className="h-12 w-12 text-main" />
                            </div>
                        </div>
                        
                        <h1 className="mb-2 text-4xl font-bold text-main">Page Not Found</h1>
                        <p className="mb-8 text-lg text-dashboardText">
                        The page you are looking for doesn&apos;t exist or has been moved.
                        </p>
                        
                        <div className="space-x-4">
                            <Button
                                variant="outline"
                                size="default"
                                asChild
                                className="border-main text-main hover:bg-main/10"
                            >
                                <Link href="/">
                                Back to Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                    </div>
            </main>
    )
}