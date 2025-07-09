"use client"

import { memo } from "react"
import type { Variants } from "framer-motion"
import { motion } from "framer-motion"
import { Shield, Award, CheckCircle2, Globe2, FileCheck, Microscope, Heart, Star, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    description: "International standard for quality management systems ensuring consistent excellence.",
    counter: 2015,
    colorScheme: {
      primary: "from-blue-500 to-indigo-600",
      bg: "from-blue-50 to-indigo-50",
      text: "text-blue-600",
      glow: "shadow-blue-500/25",
    },
    features: ["Process Excellence", "Customer Focus", "Continuous Improvement"],
  },
  {
    icon: Shield,
    title: "WHO-GMP",
    subtitle: "Good Manufacturing Practices",
    description: "World Health Organization certified manufacturing standards for pharmaceutical quality.",
    counter: 100,
    suffix: "%",
    colorScheme: {
      primary: "from-emerald-500 to-teal-600",
      bg: "from-emerald-50 to-teal-50",
      text: "text-emerald-600",
      glow: "shadow-emerald-500/25",
    },
    features: ["WHO Guidelines", "Safety Protocols", "Quality Assurance"],
  },
  {
    icon: Microscope,
    title: "I.P. Grade",
    subtitle: "Indian Pharmacopoeia",
    description: "Pharmaceutical-grade quality meeting Indian Pharmacopoeia specifications.",
    counter: 99,
    suffix: "%",
    colorScheme: {
      primary: "from-purple-500 to-violet-600",
      bg: "from-purple-50 to-violet-50",
      text: "text-purple-600",
      glow: "shadow-purple-500/25",
    },
    features: ["Medical Grade", "Purity Testing", "Safety Standards"],
  },
]

const additionalBadges = [
  {
    icon: FileCheck,
    title: "CDSCO Approved",
    color: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/20",
  },
  {
    icon: Globe2,
    title: "Export Quality",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
  {
    icon: Heart,
    title: "Healthcare Trusted",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },
  {
    icon: Star,
    title: "Premium Grade",
    color: "from-yellow-500 to-amber-500",
    glow: "shadow-yellow-500/20",
  },
]

export const CertificationsSection = memo(function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.8,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring", // ✅ Valid enum
      stiffness: 100,
      damping: 15,
    },
  },
}

  const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: "backOut", // ✅ valid easing string, NOT imported
    },
  },
}

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6"
          >
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-slate-700">World-Class Certifications</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Quality Standards & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Validated excellence through international certifications and rigorous quality standards
          </p>
        </motion.div>

        {/* Main Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div key={cert.title} variants={cardVariants} className="group">
              <Card
                className={`relative overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:shadow-2xl ${cert.colorScheme.glow} hover:shadow-2xl`}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.colorScheme.primary} p-[2px] rounded-xl`}>
                  <div className="bg-white rounded-[10px] h-full w-full" />
                </div>

                {/* Background Pattern */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.colorScheme.bg} opacity-30`} />

                <CardContent className="relative p-6 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${cert.colorScheme.primary} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <cert.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{cert.title}</h3>
                  <p className={`text-sm font-medium ${cert.colorScheme.text} mb-3`}>{cert.subtitle}</p>

                  {/* Counter */}
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${cert.colorScheme.primary} bg-clip-text text-transparent mb-4`}
                  >
                    <AnimatedCounter end={cert.counter} suffix={cert.suffix || ""} />
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">{cert.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {cert.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.3 + idx * 0.1 }}
                        className="flex items-center justify-center text-xs text-slate-600"
                      >
                        <CheckCircle2 className={`w-3 h-3 ${cert.colorScheme.text} mr-2`} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${cert.colorScheme.primary} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-8">Additional Quality Assurances</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalBadges.map((badge, index) => (
              <motion.div
                key={badge.title}
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group"
              >
                <div
                  className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl ${badge.glow} hover:shadow-xl transition-all duration-300 border border-white/20`}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${badge.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}
                  >
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{badge.title}</p>

                  {/* Subtle glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full px-6 py-3 border border-green-200/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700">Trusted by 500+ Healthcare Facilities Nationwide</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
})
export default CertificationsSection
