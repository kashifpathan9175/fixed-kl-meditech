"use client"

import type React from "react"
import { memo, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Navigation, Send, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const ContactSection = memo(function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      console.log("Form submitted:", formData)
      // Handle form submission here
    },
    [formData],
  )

  const handleInputChange = useCallback(
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    },
    [],
  )

  const openGoogleMaps = () => {
    const address = "MIDC Industrial Area, Butibori, Nagpur, Maharashtra"
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    window.open(url, "_blank")
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["9823782702", "9096388113"],
      action: () => window.open("tel:9823782702"),
      color: "text-teal-600 bg-teal-50",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["klmeditechindustries@gmail.com"],
      action: () => window.open("mailto:info@klmeditech.com"),
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Our Location",
      details: ["MIDC Industrial Area", "Butibori, Nagpur, Maharashtra"],
      action: openGoogleMaps,
      color: "text-purple-600 bg-purple-50",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to partner with us? Reach out for product inquiries, bulk orders, or any questions about our
            medical-grade cotton products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-0 bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-slate-600 mb-1">
                            {detail}
                          </p>
                        ))}
                        <motion.button
                          onClick={info.action}
                          className="mt-3 text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {info.title === "Our Location" ? "Get Directions →" : "Contact Now →"}
                        </motion.button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Get Directions Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <Button
                onClick={openGoogleMaps}
                className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Navigation className="mr-2 w-5 h-5" />
                Get Directions on Google Maps
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                        focusedField === "name" ? "text-teal-600" : "text-slate-600"
                      }`}
                    >
                      <User className="w-5 h-5" />
                    </motion.div>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange("name")}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Full Name"
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                        focusedField === "email" ? "text-teal-600" : "text-slate-600"
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                    </motion.div>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="your.email@company.com"
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                        focusedField === "phone" ? "text-teal-600" : "text-slate-600"
                      }`}
                    >
                      <Phone className="w-5 h-5" />
                    </motion.div>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange("phone")}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+91 98237 82702"
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <motion.div
                      className={`absolute left-3 top-4 transition-colors duration-200 ${
                        focusedField === "message" ? "text-teal-600" : "text-slate-600"
                      }`}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </motion.div>
                    <textarea
                      value={formData.message}
                      onChange={handleInputChange("message")}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your requirements, quantity needed, or any questions..."
                      rows={5}
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      required
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default ContactSection