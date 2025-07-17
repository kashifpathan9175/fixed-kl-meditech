"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Navigation, ExternalLink, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export const Footer = memo(function Footer() {
  const openGoogleMaps = () => {
    const address = "MIDC Industrial Area, Butibori, Nagpur, Maharashtra"
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    window.open(url, "_blank")
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                className="relative w-16 h-16 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="K&L Meditech Industries LLP Logo"
                  fill
                  className="object-contain rounded-xl shadow-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                  K&L MEDITECH
                </h3>
                <p className="text-slate-300 text-lg">INDUSTRIES LLP</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              "Gentle Cotton, Genuine Care" - Dedicated to providing high-quality medical absorbent cotton wool rolls,
              ensuring patient safety and superior healthcare standards.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <motion.div
                className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => window.open("tel:9823782702")}
              >
                <Phone className="w-5 h-5 text-teal-400" />
                <span>9823782702 / 9096388113</span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={() => window.open("mailto:klmeditechindustries@gmail.com")}
              >
                <Mail className="w-5 h-5 text-teal-400" />
                <span>klmeditechindustries@gmail.com</span>
              </motion.div>

              <motion.div
                className="flex items-start space-x-3 text-slate-300 hover:text-teal-400 transition-colors cursor-pointer"
                whileHover={{ x: 5 }}
                onClick={openGoogleMaps}
              >
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>MIDC Industrial Area, Butibori, Nagpur, Maharashtra</span>
              </motion.div>
            </div>

            {/* Get Directions Button */}
            <motion.button
              onClick={openGoogleMaps}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Navigation className="w-5 h-5" />
              <span className="font-medium">Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={link.href}>
                  <motion.button
                    onClick={() => {
                      const element = document.getElementById(link.href.replace("#", ""))
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest",
                        })
                      }
                    }}
                    className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center group w-full text-left"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Connect With Us</h4>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-700 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Info */}
            <div className="space-y-2 text-sm text-slate-400">
              <div className="text-sm text-slate-400">
                <span className="font-semibold text-slate-300">GSTIN:</span> 27ABDFK8318D1ZE
              </div>
              <motion.a href="#" className="block hover:text-teal-400 transition-colors" whileHover={{ x: 5 }}>
                Privacy Policy
              </motion.a>
              <motion.a href="#" className="block hover:text-teal-400 transition-colors" whileHover={{ x: 5 }}>
                Terms of Service
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-700 mt-12 pt-8 text-center"
        >
          <p className="text-slate-400">
            © 2024 K&L MEDITECH INDUSTRIES LLP. All rights reserved. | Made with ❤️ for Healthcare
          </p>
        </motion.div>
      </div>
    </footer>
  )
})
export default Footer
// const socialLinks = [
//   { icon: Facebook, href: "https://www.facebook.com/yourpage", label: "Facebook" },
//   { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
//   { icon: Linkedin, href: "https://www.linkedin.com/company/yourcompany", label: "LinkedIn" },
//   { icon: Instagram, href: "https://www.instagram.com/yourprofile", label: "Instagram" },
// ]
