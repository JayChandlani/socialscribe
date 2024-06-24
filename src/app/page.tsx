import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import LandingPage from "@/components/Home/LandingPage";
import AuthLayout from "@/components/Layouts/AuthLayout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | SocialScribe - Next.js Dashboard Template",
  description: "This is Next.js Home for SocialScribe Dashboard Template",
};

export default function Home() {
  return (
    <>
    <AuthLayout>
      <LandingPage />
    </AuthLayout>
    </>
  );
}
