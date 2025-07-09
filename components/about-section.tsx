"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { MapPin, Shield, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const cardData = [
  {
    icon: MapPin,
    title: "Strategic Location",
    description: "MIDC Industrial Area, Butibori, Nagpur, Maharashtra",
  },
  {
    icon: Shield,
    title: "Quality Standards",
    description: "Meeting stringent international medical-grade standards",
  },
  {
    icon: Star,
    title: "Our Motto",
    description: '"Gentle Cotton, Genuine Care" - Quality and patient well-being',
  },
]

export const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-800 mb-8"
          >
            About K&L MEDITECH INDUSTRIES LLP
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            K&L MEDITECH INDUSTRIES LLP is a leading manufacturer of "COTTON CARE" premium surgical absorbent cotton
            wool rolls. Strategically located in the MIDC Industrial Area, Butibori, Nagpur, Maharashtra, we are
            committed to delivering medical-grade products that meet stringent international standards.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {cardData.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <card.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-800 mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

export default AboutSection