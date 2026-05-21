"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TopContactBar() {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:text-[#1877f2]",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:text-[#e4405f]",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:text-[#1da1f2]",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:text-[#ff0000]",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:text-[#0077b5]",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#751f8c] via-[#b665f2] to-[#751f8c] text-white py-2.5 px-4 hidden md:block">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs sm:text-sm">
          {/* Left - Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <a
              href="mailto:info@uniqueweblayer.com"
              className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
            >
              <FaEnvelope className="w-3.5 h-3.5" />
              <span>info@uniqueweblayer.com</span>
            </a>

            <span className="text-purple-300/50 hidden sm:inline">|</span>

            <a
              href="tel:+917409233994"
              className="flex items-center gap-1.5 hover:text-purple-300 transition-colors"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" />
              <span>🇮🇳 +91 74092-33994</span>
            </a>
          </div>

          {/* Right - Social Icons with Follow Us */}
          <div className="flex items-center gap-3">
            <span className="text-purple-200/90 text-xs font-medium tracking-wider">
              FOLLOW US
            </span>
            <div className="h-4 w-px bg-purple-400/40"></div>
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white/90 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
