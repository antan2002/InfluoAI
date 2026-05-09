import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import DashboardPreview from "@/components/landing/dashboard-preview";
import About from "@/components/landing/about";
import Stats from "@/components/landing/stats";
import Features from "@/components/landing/features";
import Integrations from "@/components/landing/integrations";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import FAQ from "@/components/landing/faq";
import HowItWorks from "@/components/landing/how-it-works";
import CTA from "@/components/landing/cta";
import Footer from "@/components/landing/footer";

export default async function LandingPage() {
  const { userId } = await auth();
  if (userId) return redirect("/mail");

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FBFCF8] font-['Space_Grotesk',sans-serif] text-black">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <About />
      <Stats />
      <Features />
      <HowItWorks />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
