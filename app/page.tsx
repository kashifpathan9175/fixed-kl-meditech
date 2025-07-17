"use client"

import dynamic from "next/dynamic"
import { useEffect } from "react"
import { StartupAnimation } from "@/components/startup-animation"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductSection } from "@/components/product-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { Footer } from "@/components/footer"
import Head from "next/head"

// 💡 Dynamically import client-heavy sections to prevent hydration errors
const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
})

const CertificationsSection = dynamic(() => import("@/components/certifications-section"), {
  ssr: false,
})

export default function KLMeditechWebsite() {
  useEffect(() => {
    // Disable scroll restoration so browser doesn't scroll to previous position
    window.history.scrollRestoration = 'manual'

    // Scroll to top on load
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
     {/* 🔹 SEO Tags */}
      <Head>
        <title>Surgical Cotton Rolls | K&L Meditech Industries LLP</title>
        <meta name="description" content="Sterilized surgical cotton rolls – IP-certified, ISO 9001:2015 & WHO-GMP compliant. Medical-grade quality from K&L Meditech Industries LLP." />
        <meta name="keywords" content="surgical cotton roll, IP standard cotton, sterilized cotton, pharma-grade cotton roll, medical cotton roll India" />
        <meta property="og:title" content="Surgical Cotton Rolls - K&L Meditech" />
        <meta property="og:description" content="Pharma-grade sterilized cotton rolls manufactured under ISO and WHO-GMP standards." />
        <meta property="og:url" content="https://kl-meditech.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        {/* 🔹 Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Sterilized Surgical Cotton Roll",
              "description": "Pharma-grade, IP-certified cotton roll for hospitals, clinics, and first aid use. WHO-GMP and ISO 9001:2015 compliant.",
              "brand": "K&L Meditech",
              "manufacturer": "K&L Meditech Industries LLP",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "INR",
                "price": "100.00",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>
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
