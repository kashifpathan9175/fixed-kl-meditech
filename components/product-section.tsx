"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Shield,
  Download,
  Microscope,
  Heart,
  Users,
  Building2,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const sizes = [
  { weight: "20g", dimensions: "5cm x 10cm", usage: "Small wounds, first aid" },
  {
    weight: "50g",
    dimensions: "7cm x 15cm",
    usage: "Medium dressings, clinics",
  },
  {
    weight: "100g",
    dimensions: "10cm x 20cm",
    usage: "Standard hospital use",
    featured: true,
  },
  { weight: "200g", dimensions: "15cm x 25cm", usage: "Large wound care" },
  { weight: "250g", dimensions: "15cm x 30cm", usage: "Surgical procedures" },
  { weight: "500g", dimensions: "20cm x 40cm", usage: "Bulk medical use" },
];

const technicalSpecs = [
  { label: "Material", value: "100% Pure Cotton Fiber" },
  { label: "Absorbency Rate", value: "≥ 23 times its weight" },
  { label: "pH Level", value: "6.0 - 8.0" },
  { label: "Moisture Content", value: "≤ 8%" },
  { label: "Ash Content", value: "≤ 1%" },
  { label: "Water Soluble Matter", value: "≤ 1%" },
  { label: "Ether Soluble Matter", value: "≤ 1%" },
  { label: "Sterility", value: "Gamma Sterilized" },
];

const applications = [
  {
    icon: Heart,
    title: "Wound Care & Dressing",
    description:
      "Primary and secondary wound dressings, post-surgical care, chronic wound management",
    details: [
      "Absorbs exudate effectively",
      "Maintains wound moisture balance",
      "Non-adherent to wound bed",
    ],
  },
  {
    icon: Microscope,
    title: "Surgical Procedures",
    description:
      "Operating room procedures, surgical site preparation, hemostasis control",
    details: [
      "Lint-free application",
      "High tensile strength",
      "Maintains sterility",
    ],
  },
  {
    icon: Users,
    title: "General Medical Use",
    description:
      "Cleaning, swabbing, padding, and general medical applications",
    details: [
      "Soft texture for patient comfort",
      "High absorption capacity",
      "Easy to handle and apply",
    ],
  },
  {
    icon: Building2,
    title: "Institutional Use",
    description: "Hospitals, clinics, nursing homes, and healthcare facilities",
    details: [
      "Bulk packaging available",
      "Cost-effective solution",
      "Consistent quality assurance",
    ],
  },
];

const qualityFeatures = [
  {
    title: "Bleached & Purified",
    desc: "Chemically processed to remove impurities and natural waxes",
  },
  {
    title: "Carded & Combed",
    desc: "Mechanically processed for uniform fiber alignment",
  },
  {
    title: "Absorbent Tested",
    desc: "Laboratory tested for absorption rate and capacity",
  },
  {
    title: "Sterile Packaged",
    desc: "Individual packaging maintains sterility until use",
  },
  {
    title: "Batch Tracked",
    desc: "Complete traceability from raw material to finished product",
  },
  {
    title: "Quality Assured",
    desc: "Rigorous quality control at every manufacturing stage",
  },
];

export const ProductSection = memo(function ProductSection() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4 will-change-transform will-change-opacity"
          >
            CottonCare Absorbent Cotton Roll
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-600 mb-2 will-change-transform will-change-opacity"
          >
            Medical Grade • I.P. Standard • WHO-GMP Compliant • ISO 9001:2015 Compliant

          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 italic will-change-transform will-change-opacity"
          >
            "Gentle Cotton, Genuine Care"
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-full flex justify-center items-center will-change-transform will-change-opacity"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-2xl flex justify-center items-center">
  <Image
    src="/images/product.jpg"
    alt="CottonCare Absorbent Cotton Roll - 100g Package"
    width={350}     // ✅ Use fixed dimensions
    height={350}
    className="object-contain rounded-lg will-change-transform will-change-opacity"
    priority
  />
  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
    Featured Product
  </div>
</div>

          </motion.div>

          {/* Product Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="h-full flex items-center will-change-transform will-change-opacity"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Premium Medical Grade Cotton
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our <strong>Cotton Care Absorbent Cotton Wool Rolls</strong> are made from{" "}
                  <strong>100% pure, high-quality cotton fibers</strong>, processed using{" "}
                  <strong>advanced purification techniques</strong> to ensure excellent{" "}
                  <strong>absorbency, softness, and purity</strong>. Manufactured in compliance with{" "}
                  <strong>Indian Pharmacopoeia (I.P.) standards</strong> and under{" "}
                  <strong>WHO-GMP compliant facilities</strong>, they are a trusted choice for{" "}
                  <strong>medical and hygienic applications</strong>.
                  <br />
                  <br />
                  These <strong>lint-free</strong>, <strong>non-irritating</strong> cotton rolls are
                  gentle on the skin and ideal for a wide range of{" "}
                  <strong>clinical, and personal care uses</strong>. Designed to meet the
                  needs of <strong>healthcare professionals</strong>, our cotton rolls are available in{" "}
                  <strong>various sizes</strong> to suit different applications.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Superior absorption capacity (more than 23x its weight)</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Lint-free and non-irritating to skin</span>
                  </li>
                  {/* <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Gamma sterilized for complete safety</span>
                  </li> */}
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Individually sealed packaging</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 will-change-transform will-change-opacity"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/brochures/kandlmeditech.pdf";
                    link.download = "kandlmeditech.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* You can keep the rest of your layout the same */}
      </div>
    </section>
  );
});

export default ProductSection;
