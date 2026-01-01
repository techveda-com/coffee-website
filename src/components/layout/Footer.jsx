import React from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "PRIVACY",
      links: ["Terms of use", "Privacy policy", "Cookies"],
    },
    {
      title: "SERVICES",
      links: ["Shop", "Order ahead", "Menu"],
    },
    {
      title: "ABOUT US",
      links: ["Find a location", "About us", "Our story"],
    },
    {
      title: "INFORMATION",
      links: ["Plans & pricing", "Sell your products", "Jobs"],
    },
  ];

  return (
    <footer className="w-full bg-[#2B1B17] text-[#E2D9C8] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-350 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 lg:gap-8">
        {/* Logo Section */}
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold tracking-tighter text-white uppercase">
            Coffee
          </h2>
        </div>

        {/* Dynamic Link Sections */}
        {footerSections.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h3 className="text-lg font-serif font-bold tracking-widest text-white uppercase">
              {section.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm font-medium opacity-80 hover:opacity-100 hover:text-white transition-all"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social Media Section */}
        <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
          <h3 className="text-lg font-serif font-bold tracking-widest text-white uppercase">
            Social Media
          </h3>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/techveda.com_?igsh=M2l1ZTU2bTFwbzh6"
              className="hover:text-white transition-colors"
            >
              <Instagram size={22} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Optional Bottom Bar */}
      <div className="max-w-350 mx-auto mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs opacity-50">
        <p>© {new Date().getFullYear()} techVeda. All rights reserved.</p>
        <p>Made with Love & Caffeine.</p>
      </div>
    </footer>
  );
};

export default Footer;
