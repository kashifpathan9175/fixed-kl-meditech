"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import Head from "next/head";

import { StartupAnimation } from "@/components/startup-animation";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProductSection } from "@/components/product-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { Footer } from "@/components/footer";

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: false,
});

const CertificationsSection = dynamic(
  () => import("@/components/certifications-section"),
  {
    ssr: false,
  }
);

export default function KLMeditechWebsite() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <Head>
        <title>Surgical Cotton Rolls | K&L Meditech Industries LLP</title>

        <link rel="icon" href="/public/favicon.ico" type="image/x-icon" />

        <meta
          name="description"
          content="Sterilized surgical cotton rolls – IP-certified, ISO 9001:2015 & WHO-GMP compliant. Medical-grade quality from K&L Meditech Industries LLP."
        />
        <meta
          name="keywords"
          content="surgical cotton roll, IP standard cotton, sterilized cotton, pharma-grade cotton roll, medical cotton roll India, KL Meditech, ISO 9001, WHO GMP"
        />
        <meta name="author" content="K&L Meditech Industries LLP" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Surgical Cotton Rolls - K&L Meditech" />
        <meta
          property="og:description"
          content="Pharma-grade sterilized cotton rolls manufactured under ISO and WHO-GMP standards."
        />
        <meta property="og:url" content="https://www.klmeditechindustries.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.klmeditechindustries.com/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta charSet="UTF-8" />

        {/* ✅ Product Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Sterilized Surgical Cotton Roll",
              description:
                "Pharma-grade, IP-certified cotton roll for hospitals, clinics, and first aid use. WHO-GMP and ISO 9001:2015 compliant.",
              brand: "K&L Meditech",
              manufacturer: "K&L Meditech Industries LLP",
              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: "100.00",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />

        {/* ✅ Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "K&L Meditech Industries LLP",
              url: "https://www.klmeditechindustries.com",
              logo: "https://www.klmeditechindustries.com/logo.png",
              sameAs: [
                "https://www.facebook.com/klmeditechindustries",
                "https://www.instagram.com/klmeditechindustries",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700001",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9876543210",
                contactType: "Customer Service",
              },
            }),
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
  );
}
