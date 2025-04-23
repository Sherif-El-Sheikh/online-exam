"use client"

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

interface Props {
    role: "admin" | "user"
}

export function ClientNavbarButtons({ role }: Props) {
    const pathname = usePathname();

    const handleStartQuiz = () => {
        console.log("Starting quiz...");
    }

    const handleAddDiploma = () => {
        console.log("Adding diploma...");
    }

    const handleAddQuiz = () => {
        console.log("Adding quiz...");
    }

    return (
        <>
            {/* Shown for users */}
            {role === "user" && (
                <Button variant="startQuiz" onClick={handleStartQuiz}>
                    Start Quiz
                </Button>
            )}

            {/* Shown for admins */}
            {role === "admin" && (
                pathname === "/admin-dashboard/exams" ? (
                    <Button
                        variant="startQuiz"
                        className="min-[640px]:text-[0.675rem] max-[640px]:text-[0.65rem]"
                        onClick={handleAddQuiz}
                    >
                        Add Quiz
                    </Button>
                ) : (
                    <Button
                        variant="startQuiz"
                        className="min-[640px]:text-[0.675rem] max-[640px]:text-[0.65rem]"
                        onClick={handleAddDiploma}
                    >
                        Add Diploma
                    </Button>
                )
            )}
        </>
    );
}
