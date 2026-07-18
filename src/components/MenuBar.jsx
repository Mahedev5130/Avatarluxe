"use client";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import PopupForm from "@/components/PopupForm";

export function MenuBar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Treatments",
      children: [
        { name: "Hair Treatments", link: "/hair-treatments" ,
          children: [
            {
              name: "Hair Fall Control",
              link: "/hair-treatments?tab=fallcontrol#treatments",
            },
            {
              name: "Cosmetic Hair Restoration",
              link: "/hair-treatments?tab=cosmetic#treatments",
            },
            {
              name: "Synthetic Hair Transplant",
              link: "/synthetic-hair-transplant",
            },
          ],
        },
        { name: "Surgical Treatments", 
          link: "/surgical-treatments",
          children: [
            {
              name: "Breast Augmentation",
              link: "/breast-augmentation-surgery",
            },
          ],
       },
        { name: "Skin Treatments", link: "/skin-care-treatments", 
        children: [   
          {
              name: "Laser Hair Removal",
              link: "/laser-hair-removal",
            },
          ],
        },
      ],
    },
    { name: "About Us", link: "/about-us" },
    { name: "Testimonial", link: "#testimonial" },
    { name: "Contact", link: "/contact-us" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-black/30 backdrop-blur-sm shadow-sm">
        <div className="max-w-8xl mx-auto px-4 relative">
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <NavbarLogo />

              {/* Custom Nav Items with Dropdown */}
              <div className="flex items-center gap-8">
                {navItems.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {item.children ? (
                      <>
                        <button className="text-white flex items-center gap-3">
                          {item.name}
                          <span className="text-xs">▼</span>
                        </button>

                        {/* Dropdown */}
                        <div className="absolute top-full left-0 mt-3 w-56 bg-black border border-white/10 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                          {item.children.map((child, cIdx) => (
                            <div key={cIdx} className="group/child relative">

                              {child.children ? (
                                <>
                                  {/* PARENT ITEM (UNCHANGED DESIGN) */}
                                  <a
                                    href={child.link}
                                    className="group flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-300"
                                  >
                                    {/* EXISTING GOLD ARROW */}
                                    <span className="w-4 flex justify-center text-[#D4AF37] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                      →
                                    </span>

                                    {/* TEXT */}
                                    <span className="transition-all duration-300 group-hover:translate-x-1">
                                      {child.name}
                                    </span>
                                  </a>

                                  {/* SUB-SUB MENU */}
                                  <div className="absolute left-full top-0 ml-2 w-56 bg-black border border-white/10 rounded-lg opacity-0 invisible group-hover/child:opacity-100 group-hover/child:visible transition-all duration-300">
                                    {child.children.map((sub, sIdx) => (
                                      <a
                                        key={sIdx}
                                        href={sub.link}
                                        className="group flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-300"
                                      >
                                        {/* SAME GOLD ARROW HERE */}
                                        <span className="w-4 flex justify-center text-[#D4AF37] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                          →
                                        </span>

                                        {/* TEXT */}
                                        <span className="transition-all duration-300 group-hover:translate-x-1">
                                          {sub.name}
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                                </>
                              ) : (
                                /* NORMAL ITEM (UNCHANGED) */
                                <a
                                  href={child.link}
                                  className="group flex items-center gap-2 px-4 py-3 text-sm text-white hover:bg-white/10 transition-all duration-300"
                                >
                                  <span className="w-4 flex justify-center text-[#D4AF37] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    →
                                  </span>

                                  <span className="transition-all duration-300 group-hover:translate-x-1">
                                    {child.name}
                                  </span>
                                </a>
                              )}

                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <a href={item.link} className="text-white">
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <NavbarButton variant="primary" onClick={() => setOpen(true)}>
                  Book Appointment
                </NavbarButton>
              </div>
              {open && <PopupForm onClose={() => setOpen(false)} />}
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() =>
                    setIsMobileMenuOpen(!isMobileMenuOpen)
                  }
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => (
                  <div key={idx} className="mb-5">
                    
                    {/* MAIN ITEM */}
                    {item.children ? (
                      <div className="flex flex-col gap-3">
                        
                        <span className="text-neutral-300 font-medium">
                          {item.name}
                        </span>

                        {/* LEVEL 1 */}
                        <div className="pl-4 flex flex-col gap-2">
                          {item.children.map((child, cIdx) => (
                            <div key={cIdx} className="flex flex-col gap-1">

                              {/* CHILD ITEM */}
                              <a
                                href={child.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="group flex items-center gap-2 text-neutral-400"
                              >
                                {/* GOLD ARROW */}
                                <span className="w-4 flex justify-center text-[#D4AF37] opacity-100">
                                  →
                                </span>

                                {/* TEXT */}
                                <span className="transition-all duration-300 group-hover:translate-x-1">
                                  {child.name}
                                </span>
                              </a>

                              {/* LEVEL 2 (SUB-SUB MENU) */}
                              {child.children && (
                                <div className="pl-6 flex flex-col gap-1 mt-1">
                                  {child.children.map((sub, sIdx) => (
                                    <a
                                      key={sIdx}
                                      href={sub.link}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="group flex items-center gap-2 text-neutral-500 text-sm"
                                    >
                                      {/* GOLD ARROW */}
                                      <span className="w-4 flex justify-center text-[#D4AF37] opacity-100">
                                        →
                                      </span>

                                      {/* TEXT */}
                                      <span className="transition-all duration-300 group-hover:translate-x-1">
                                        {sub.name}
                                      </span>
                                    </a>
                                  ))}
                                </div>
                              )}

                            </div>
                          ))}
                        </div>

                      </div>
                    ) : (
                      <a
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-neutral-300"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}

                {/* BUTTON */}
                <div className="flex w-full flex-col gap-4 mt-6">
                  <NavbarButton
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setOpen(true);
                    }}
                    variant="primary"
                    className="w-full"
                  >
                    Book Appointment
                  </NavbarButton>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      </div>
    </header>
  );
}