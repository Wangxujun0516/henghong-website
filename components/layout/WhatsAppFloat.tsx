"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-2 rounded-lg bg-white p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
            <p className="text-sm font-semibold text-primary">Quick Contact</p>
            <div className="mt-1 space-y-1">
              {siteConfig.contact.whatsapp.map((num, index) => (
                <a
                  key={index}
                  href={`https://wa.me/${num.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-muted hover:text-primary"
                >
                  WhatsApp: {num}
                </a>
              ))}
            </div>
            <p className="mt-1 text-xs text-muted">
              Email: {siteConfig.contact.email}
            </p>
          </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-muted hover:text-primary transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        title="Contact via WhatsApp"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </button>
    </div>
  );
}
