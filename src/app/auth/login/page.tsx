"use client"
import { PasswordInput } from "@/components/common/password-input";
import { VariantInput } from "@/components/common/variant-input";

export default function Page() {
    return (
        <main className="p-4">
            <VariantInput variant="auth" placeholder="Enter Email" className="mb-4"/>
            <PasswordInput placeholder="Password" className=""/>
        </main>
    );
}