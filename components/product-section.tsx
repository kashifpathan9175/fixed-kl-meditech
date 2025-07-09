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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochures/zaps-brochure.pdf"; // ✅ path to your PDF inside the public folder
    link.download = "ZapsPremium-Brochure.pdf"; // ✅ optional filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            CottonCare Absorbent Cotton Roll
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-blue-600 mb-2"
          >
            Medical Grade • I.P. Standard • WHO-GMP Certified
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 italic"
          >
            "Gentle Cotton, Genuine Care"
          </motion.p>
        </div>

        {/* Main Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 shadow-2xl">
              <div className="relative h-96 w-full">
                <Image
                  src="/images/product.jpg"
                  alt="CottonCare Absorbent Cotton Roll - 100g Package"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-blue-600">
                Featured Product
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Premium Medical Grade Cotton
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our CottonCare Absorbent Cotton Roll is manufactured using
                  100% pure cotton fibers, processed through advanced
                  purification techniques to ensure maximum absorbency,
                  softness, and sterility. Compliant with Indian Pharmacopoeia
                  (I.P.) standards and WHO-GMP guidelines.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Superior absorption capacity (23x its weight)</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Lint-free and non-irritating to skin</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Gamma sterilized for complete safety</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>Individually sealed packaging</span>
                  </li>
                </ul>
              </div>

              {/* Download Brochure */}
              <div className="flex gap-4">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/brochures/kandlmeditech.pdf"; // ✅ Ensure this file exists in your /public folder
                    link.download = "/brochures/kandlmeditech.pdf"; // ✅ Suggested filename
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

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-sm font-medium text-gray-500 mb-2">
                      {spec.label}
                    </div>
                    <div className="text-lg font-bold text-blue-600">
                      {spec.value}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Available Sizes with Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Available Sizes & Specifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sizes.map((size, index) => (
              <motion.div
                key={size.weight}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card
                  className={`h-full transition-all duration-300 ${
                    size.featured
                      ? "ring-2 ring-blue-500 shadow-lg bg-blue-50"
                      : "hover:shadow-lg"
                  }`}
                >
                  <CardContent className="p-6">
                    {size.featured && (
                      <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full inline-block mb-3">
                        Most Popular
                      </div>
                    )}
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {size.weight}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Dimensions:</strong> {size.dimensions}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Ideal for:</strong> {size.usage}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Applications & Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Applications & Use Cases
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <app.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {app.title}
                        </h4>
                        <p className="text-gray-600 mb-4">{app.description}</p>
                        <ul className="space-y-1">
                          {app.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-gray-600"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Quality Assurance Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-3">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
export default ProductSection;
