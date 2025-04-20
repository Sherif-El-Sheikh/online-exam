"use client"

import { Button } from "@/components/ui/button";

interface Props {
    role: string
}

export  function ClientNavbarButtons({ role }: Props) {
    const handleStartQuiz = () => {
        console.log("Starting quiz...");
        
    }

    const handleAddDiploma = () => {
        console.log("Adding diploma...");
    
    }

    return (
        <>
            {/* Shown for users */}
            {role === "user" && (
                <Button variant="startQuiz" onClick={handleStartQuiz}>
                    Start Quiz
                </Button>
            )}

            {/* shown for admins */}
            {role === "admin" && (
                <Button variant="startQuiz" className="min-[640px]:text-[0.675rem] max-[640px]:text-[0.65rem]" onClick={handleAddDiploma}>
                    Add Diploma
                </Button>
            )}
        </>
    );
}
