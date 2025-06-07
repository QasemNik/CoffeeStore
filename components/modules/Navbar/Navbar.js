import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

// Define navigation links as an array of objects
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/menu", label: "Menu" },
  {
    label: "Pages",
    isDropdown: true,
    dropdownItems: [
      { href: "/reservation", label: "Reservation" },
      { href: "/testimonial", label: "Testimonial" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const isActive = (path) => router.pathname === path;

  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav
        className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}
      >
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">
            GEM-Coffee
          </h1>
        </Link>

        {/* Toggle Navbar */}
        <button
          type="button"
          className={styles.navbar_toggler}
          onClick={toggleHandler}
        >
          <span className={styles.navbar_toggler_icon}></span>
        </button>

        <div
          className={`${styles.navbar_collapse} ${isOpen ? styles.show : ""}`}
          id="navbarCollapse"
        >
          <div className={`${styles.navbar_nav} ml-auto p-4`}>
            {navLinks.map((link) =>
              link.isDropdown ? (
                <div key={link.label}
                  className={styles.dropdown}>
                  <a
                    href="#"
                    className={`${styles.nav_link} ${styles.dropdown_toggle}`}
                  >
                    {link.label}
                  </a>
                  <div
                    className={`${styles.dropdown_menu} ${styles.text_capitalize}`}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.dropdown_item} ${
                          isActive(item.href) ? styles.active_nav_link : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.nav_link} ${
                    isActive(link.href) ? styles.active_nav_link : ""
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;