import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
            <main className="flex min-h-full items-center justify-center px-4 py-8">
                <div className="w-full max-w-md">
                    <RegisterForm />
                </div>
            </main>
        </div>
    );
}
