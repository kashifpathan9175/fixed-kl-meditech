"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Award } from "lucide-react"

export const HeroSection = memo(function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div className="absolute top-32 right-20 hidden lg:block" variants={floatingVariants} animate="animate">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
          <Shield className="w-8 h-8 text-teal-600" />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-40 left-20 hidden lg:block"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20">
          <Award className="w-8 h-8 text-blue-600" />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {/* Trust Indicators */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-slate-600 border border-white/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Trusted by 500+ Healthcare Facilities
            </div>
          </motion.div>

          {/* Main Heading with Gradient Text */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-teal-700 via-blue-700 to-slate-800 bg-clip-text text-transparent">
                K&L MEDITECH
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-blue-600 to-teal-600 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl">
                INDUSTRIES LLP
              </span>
            </h1>
          </motion.div>

          {/* Tagline with Enhanced Animation */}
          <motion.div variants={itemVariants} className="relative mb-6">
            <motion.div
              className="text-xl md:text-2xl text-slate-700 font-light italic relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                "
                <motion.span
                  className="relative text-teal-600 font-medium"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(20, 184, 166, 0)",
                      "0 0 10px rgba(20, 184, 166, 0.3)",
                      "0 0 0px rgba(20, 184, 166, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  Gentle Cotton
                </motion.span>
                ,
                <motion.span
                  className="relative text-blue-600 font-medium"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(59, 130, 246, 0)",
                      "0 0 10px rgba(59, 130, 246, 0.3)",
                      "0 0 0px rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                >
                  Genuine Care
                </motion.span>
                "
              </motion.span>

              {/* Enhanced Animated Underline */}
              <motion.div
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: "100%",
                  opacity: 1,
                  boxShadow: [
                    "0 0 0px rgba(20, 184, 166, 0)",
                    "0 0 20px rgba(20, 184, 166, 0.4)",
                    "0 0 0px rgba(20, 184, 166, 0)",
                  ],
                }}
                transition={{
                  width: { delay: 1.2, duration: 0.8, ease: "easeOut" },
                  opacity: { delay: 1.2, duration: 0.4 },
                  boxShadow: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }}
              />

              {/* Floating Sparkles */}
              <motion.div
                className="absolute -top-2 left-8 w-2 h-2 bg-teal-400 rounded-full opacity-70"
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 2.5,
                }}
              />

              <motion.div
                className="absolute -top-1 right-12 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [-3, -12, -3],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3,
                }}
              />

              <motion.div
                className="absolute -bottom-1 right-6 w-1 h-1 bg-purple-400 rounded-full opacity-50"
                animate={{
                  y: [3, -8, 3],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 3.5,
                }}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={itemVariants}
            className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Manufacturing premium medical-grade absorbent cotton products with{" "}
            <span className="font-semibold text-teal-600">WHO-GMP certification</span> and{" "}
            <span className="font-semibold text-blue-600">ISO 9001:2015</span> standards
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                onClick={() => scrollToSection("products")}
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="group text-lg px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 bg-white/60 backdrop-blur-sm"
                onClick={() => scrollToSection("contact")}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "2024", label: "Founded", color: "text-teal-600" },
              { number: "100%", label: "Quality Commitment", color: "text-blue-600" },
              { number: "24/7", label: "Customer Support", color: "text-slate-600" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/60 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
})

export default HeroSection