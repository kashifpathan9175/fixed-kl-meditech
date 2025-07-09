"use client"

import dynamic from "next/dynamic"

import { StartupAnimation } from "@/components/startup-animation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductSection } from "@/components/product-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { Footer } from "@/components/footer"

// 💡 Dynamically import client-heavy sections to prevent hydration errors
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
})

const CertificationsSection = dynamic(() => import("@/components/certifications-section"), {
  ssr: false,
})

export default function KLMeditechWebsite() {
  return (
    <>
      <StartupAnimation />
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <CertificationsSection />
        <UseCasesSection />
        <WhyChooseSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}
