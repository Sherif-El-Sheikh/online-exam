"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react"
;

export default function ExamsButtons({role}: ExamButtonProps) {
    const [open, setOpen] = useState(false);
    console.log(open)

    const isUser = role === "user";
    const buttonText = isUser ? "Start" : "Add Question"
    return (
        <>
        <Button
        variant={isUser ? "start" : "addQuestion"}
        onClick={() => setOpen(true)}
        >
            {buttonText}
        </Button>

        </>
    )
}
