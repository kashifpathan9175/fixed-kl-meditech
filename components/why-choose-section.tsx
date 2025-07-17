"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Shield, Clock, Star } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "WHO-GMP | ISO 9001:2015 | IP GRADE",
    description: "Meeting highest national and international regulatory standards for medical devices.",
  },
  {
    icon: Clock,
    title: "Timely Delivery & Supply",
    description: "Reliable and efficient distribution for both retail and institutional clients.",
  },
  {
    icon: Star,
    title: "Trusted Quality & Safety",
    description: "Stringent quality control guarantees safe, effective, and consistent products.",
  },
]

export const WhyChooseSection = memo(function WhyChooseSection() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-12"
          >
            Why Choose Cotton Care?
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhyChooseSection