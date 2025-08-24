import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { RegisterForm } from "@/components/auth/register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container px-4 sm:px-6 lg:px-8 flex items-center justify-center py-12">
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}
