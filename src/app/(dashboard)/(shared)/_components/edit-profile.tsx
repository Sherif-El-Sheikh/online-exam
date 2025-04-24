"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Edit, Loader2, X } from "lucide-react";
import { useState, useTransition } from "react";


export default function EditProfile({ lastName: initialLastName }: { lastName: string }) {
    const [lastName, setLastName] = useState(initialLastName);
    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState("");
    const [isPending, startTransition] = useTransition();

    const handleSave = () => {
        if (!lastName) {
            setError("Last name is required.");
            return;
            }
            setError("");
            startTransition(async () => {
        try {
                // await updateLastName(lastName);
                setEditMode(false);
            } catch (err) {
                setError("Failed to update. Try again.");
            }
            });
        }
        
        const handleCancel = () => {
            setLastName(initialLastName);
            setEditMode(false);
            setError("");
        }

    return (
        <div className="grid gap-2">
             {/* Label */}
            <Label htmlFor="lastName" className="">
            Last Name
            </Label>

            <div className="flex items-center gap-2">
                {editMode ? (
                    <>
                        {/* Editable input field */}
                        <div className="flex-1">
                            <Input
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={`bg-white mb-2 ${error ? "border-destructive " : ""}`}
                            />

                        {/* Error message */}
                        {error && (
                            <p className="text-xs text-destructive">{error}</p>
                        )}
                        </div>

                        {/* Cancel and Save buttons */}
                        <div className="flex gap-2 mb-3">
                            <Button 
                            variant="outline"
                            size="icon"
                            onClick={handleCancel}
                            className="border-main text-main hover:bg-main/10"
                            >
                                <X className="h-4 w-4"/>
                            </Button>
                            
                            <Button
                            size="icon"
                            onClick={handleSave}
                            disabled={isPending}
                            className="bg-main hover:bg-main/90"
                            >
                                {isPending ? (
                                    <Loader2 className="h-4 w-4 animate-spin"/>
                                ) : (
                                    <Check className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </>
                    ) : 
                    
                    (
                        <>
                        {/* Read-only input */}
                        <Input
                        id="lastName"
                        value={lastName}
                        disabled
                        className="bg-white"
                        />

                        {/* Edit button to toggel edit mode */}
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => setEditMode(true)}
                            className="border-main text-main hover:bg-main/10"
                            >
                            <Edit className="h-4 w-4" />
                        </Button>
                        </>
                    )
                }
            </div>
        </div>
    )
}
