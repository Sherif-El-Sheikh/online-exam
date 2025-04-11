import { Input } from "@/components/ui/input";

export default function Page() {
    return (
        <main className="p-4">
            <Input
            type="email"
            placeholder="Enter Email"
            className="h-12 w-1/2 rounded-md border border-slate-200 px-3"
            />
        </main>
    );
}