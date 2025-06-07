"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { LuArrowDownFromLine } from "react-icons/lu";
import toast from "react-hot-toast";

export default function ShareModal() {
  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = "https://links.joaoclev.dev.br";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Link copiado!', {
      style: {
        borderRadius: "50px"
      }
    })
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Compartilhar"
        className="text-[var(--destak)] mt-10 p-4 rounded-full shadow-md shadow-indigo-400/20 dark:shadow-none transition cursor-pointer transform hover:-translate-y-1.5"
      >
        <BsShare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay*/}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-opacity-30 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-24 z-50 w-72 rounded-4xl p-6 shadow-lg border-1 border-gray-800 bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-[var(--destak)] text-center">Compartilhar</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <button
                    onClick={copyToClipboard}
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full transition text-white cursor-pointer transform hover:-translate-y-1"
                  >
                    <MdContentCopy size={20} /> Copiar link
                  </button>
                </li>

                <li>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-full transition text-white transform hover:-translate-y-1"
                  >
                    <BsWhatsapp size={20} /> WhatsApp
                  </a>
                </li>
              </ul>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full flex justify-center items-center text-[var(--destak)] rounded-full py-2 transition cursor-pointer transform hover:-translate-y-1"
              >
                <LuArrowDownFromLine size={30} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
