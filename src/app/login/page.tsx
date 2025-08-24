import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container flex items-center justify-center py-12">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}
