"use client";

import { memo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export const Header = memo(function Header() {
  const { scrollDirection, isAtTop } = useScrollDirection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const shouldShow = scrollDirection === "up" || isAtTop;

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {shouldShow && (
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 120,
            damping: 20,
          }}
          className={`fixed top-0 w-full z-50 transition-transform duration-500 transform ${
            shouldShow ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <motion.button
                aria-label="Toggle Mobile Menu"
                type="button"
                onClick={() => scrollToSection("hero")}
                className="flex items-center space-x-3 group cursor-pointer will-change-transform will-change-opacity"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="relative w-12 h-12 flex-shrink-0 will-change-transform will-change-opacity"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src="/images/logo.jpg"
                    alt="K&L Meditech Industries LLP Logo"
                    fill
                    className="object-contain rounded-lg shadow-sm relative z-10 will-change-transform will-change-opacity"
                    priority
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <motion.h1
                    className="font-bold text-gray-800 text-lg leading-tight group-hover:text-teal-600 transition-colors duration-300 will-change-transform will-change-opacity"
                    whileHover={{ x: 2 }}
                  >
                    K&L MEDITECH
                  </motion.h1>
                  <p className="text-xs text-gray-500 leading-tight">
                    INDUSTRIES LLP
                  </p>
                </div>
              </motion.button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="relative px-4 py-2 text-gray-600 hover:text-teal-600 transition-colors duration-300 font-medium group will-change-transform will-change-opacity"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg opacity-0 group-hover:opacity-100 will-change-transform will-change-opacity"
                      initial={false}
                      transition={{ duration: 0.2 }}
                    />

                    {/* Animated Underline - Fixed Alignment */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full will-change-transform will-change-opacity"
                      initial={{ width: 0 }}
                      whileHover={{ width: "80%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />

                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-blue-400/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 will-change-transform will-change-opacity"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </nav>

              {/* Contact Info & CTA */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-teal-600" />
                  <div className="flex items-center space-x-1">
                    <button
                      onClick={() => window.open("tel:9823782702")}
                      className="hover:text-teal-600 transition-colors cursor-pointer will-change-transform will-change-opacity"
                    >
                      9823782702
                    </button>
                    <span>/</span>
                    <button
                      onClick={() => window.open("tel:9096388113")}
                      className="hover:text-teal-600 transition-colors cursor-pointer will-change-transform will-change-opacity"
                    >
                      9096388113
                    </button>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group will-change-transform will-change-opacity"
                    onClick={() => scrollToSection("contact")}
                  >
                    <span className="relative z-10">Get Quote</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent will-change-transform will-change-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors will-change-transform will-change-opacity"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="lg:hidden mt-4 pb-4 border-t border-gray-100 bg-white/80 backdrop-blur-sm rounded-b-2xl will-change-transform will-change-opacity"
                >
                  <div className="flex flex-col space-y-1 pt-4">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setTimeout(
                            () => scrollToSection(item.href.replace("#", "")),
                            50
                          );
                        }}
                        className="text-left px-4 py-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 transition-all font-medium rounded-lg mx-2 will-change-transform will-change-opacity"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          x: 5,
                          backgroundColor: "rgba(20, 184, 166, 0.05)",
                        }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                    <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2 px-4">
                      <Phone className="w-4 h-4 text-teal-600" />
                      <div className="flex items-center space-x-1">
                        <button
                          onClick={() => window.open("tel:9823782702")}
                          className="hover:text-teal-600 transition-colors cursor-pointer will-change-transform will-change-opacity"
                        >
                          9823782702
                        </button>
                        <span>/</span>
                        <button
                          onClick={() => window.open("tel:9096388113")}
                          className="hover:text-teal-600 transition-colors cursor-pointer will-change-transform will-change-opacity"
                        >
                          9096388113
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
});
export default Header;
