"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Users, Shield, Truck, Star } from "lucide-react"

const useCases = [
  {
    icon: Users,
    title: "Hospitals & Clinics",
    description: "Medical procedures, wound care, and general patient care",
  },
  {
    icon: Shield,
    title: "Pharmacies",
    description: "Reliable choice for dispensing and first aid kits",
  },
  {
    icon: Truck,
    title: "Emergency Services",
    description: "Immediate wound management and absorption",
  },
  {
    icon: Star,
    title: "Veterinary Clinics",
    description: "Animal care for wound dressing and hygiene",
  },
]

export const UseCasesSection = memo(function UseCasesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Where Our Products Are Used
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <useCase.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default UseCasesSection