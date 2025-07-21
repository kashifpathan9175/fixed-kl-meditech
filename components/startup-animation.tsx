"use client";

import { memo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const StartupAnimation = memo(function StartupAnimation() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-teal-50 via-blue-50 to-white overflow-hidden"
        >
          <div className="text-center">
            {/* Logo with Card Effect */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              className="relative mb-6 will-change-transform will-change-opacity"
            >
              <motion.div
                className="relative w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl shadow-2xl p-2 mx-auto"
                initial={{ boxShadow: "0 0 0 0 rgba(20, 184, 166, 0)" }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(20, 184, 166, 0)",
                    "0 0 0 10px rgba(20, 184, 166, 0.1)",
                    "0 0 0 20px rgba(20, 184, 166, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: 1,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="K&L Meditech Industries LLP"
                  fill
                  className="object-contain rounded-xl will-change-transform will-change-opacity"
                  priority
                  sizes="(max-width: 768px) 80vw, 120px"
                />
              </motion.div>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-2">
                K&L MEDITECH INDUSTRIES LLP
              </h1>
              <motion.p
                className="text-slate-600 italic text-sm will-change-transform will-change-opacity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                "Gentle Cotton, Genuine Care"
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="mt-6 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden will-change-transform will-change-opacity will-change-transform will-change-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.3 }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full will-change-transform will-change-opacity will-change-transform will-change-opacity"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default StartupAnimation;
