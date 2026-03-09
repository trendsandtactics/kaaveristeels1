"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface PopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Popup({ isOpen = true, onClose }: PopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-[50%] top-[50%] z-[101] w-full max-w-lg -translate-x-[50%] -translate-y-[50%] p-6"
          >
            <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden p-8 flex flex-col items-center text-center">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none"
                >
                    <X className="h-6 w-6 text-black" />
                    <span className="sr-only">Close</span>
                </button>

                <h2 className="text-2xl font-heading font-bold mb-4 text-black">Welcome to Kaaveri Steel</h2>
                <p className="text-black/70 mb-8">
                    Building a Stronger, Sustainable Future with our premium TMT bars and structural steel.
                </p>

                <div className="flex gap-4">
                    <Link href="/products" onClick={onClose} className="px-6 py-3 bg-accent-red text-white font-bold uppercase tracking-wider text-sm rounded hover:bg-red-700 transition-colors">
                        View Products
                    </Link>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
