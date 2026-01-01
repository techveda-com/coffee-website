// src/components/Navbar.jsx
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const LINKS = [
    { title: "Home", link: "/" },
    { title: "Coffee", link: "coffee-section" },
    { title: "Bakery", link: "dessert-section" },
    { title: "Shop", link: "coffee-section" },
    { title: "About", link: "testimonial" },
  ];
  return (
    <header className="absolute top-6 left-0 w-full z-50">
      {/* Centered Navbar Container */}
      <nav
        className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between
                      bg-black/20 backdrop-blur-md rounded-full text-white"
      >
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">Coffea</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm uppercase tracking-widest">
          {LINKS.map((item) => (
            <li
              key={item}
              className="relative cursor-pointer after:absolute after:left-0 after:-bottom-1 
                        after:h-px after:w-0 after:bg-white after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              <a href={`#${item.link}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mx-auto mt-4 max-w-6xl bg-black/90 text-white rounded-2xl px-6 py-6 space-y-4">
          {LINKS.map((item) => (
            <a
              href={item.link}
              className="uppercase tracking-widest border-b border-white/20 pb-2"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
