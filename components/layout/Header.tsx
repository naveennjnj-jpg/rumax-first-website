"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { asset, navLinks, serviceDropdownLinks, socialLinks } from "@/data/site";
import { AssetImage } from "@/components/ui/AssetImage";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const isServicesActive = serviceDropdownLinks.some((link) => isActivePath(pathname, link.href));
  const toggleServices = () => setIsServicesOpen((current) => !current);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <AssetImage className="topbar-icon" name="rumax-location.svg" aria-hidden="true" />
            <span>Basildon, Essex</span>
            <span className="divider" />
            <AssetImage className="topbar-icon" name="rumax-phone.svg" aria-hidden="true" />
            <span>+44 3330115030 | +44 1268 293666</span>
          </div>
          <nav className="socials" aria-label="Social media">
            {socialLinks.map((social) => (
              <a href="#" aria-label={social.label} key={social.label}>
                <AssetImage name={social.icon} />
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="navbar">
        <div className="container navbar__inner">
          <a className="brand" href="/" aria-label="Rumax home">
            <img src={asset("rumax-logo-header.png")} alt="Rumax" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="primary-nav"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
            <span className="sr-only">Open navigation</span>
          </button>

          <nav className={`primary-nav${isOpen ? " is-open" : ""}`} id="primary-nav" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    className={`nav-dropdown${isServicesOpen ? " is-open" : ""}`}
                    key={link.label}
                  >
                    <button
                      className={`nav-dropdown__trigger nav-with-icon${isServicesActive ? " active" : ""}`}
                      type="button"
                      aria-expanded={isServicesOpen}
                      aria-controls="services-menu"
                      onPointerDown={(event) => {
                        event.preventDefault();
                        toggleServices();
                      }}
                      onClick={(event) => {
                        if (event.detail === 0) {
                          toggleServices();
                        }
                      }}
                    >
                      {link.label}
                      <AssetImage name="rumax-nav-arrow.svg" aria-hidden="true" />
                    </button>
                    <div className={`nav-dropdown__menu${isServicesActive ? " has-active" : ""}`} id="services-menu" role="menu">
                      {serviceDropdownLinks.map((item) => (
                        <a href={item.href} role="menuitem" className={isActivePath(pathname, item.href) ? "active" : undefined} key={item.href}>
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a href={link.href} className={isActivePath(pathname, link.href) ? "active" : undefined} key={link.label}>
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="btns">
            <a className="login-btn" target="_blank" href="https://rumax-second-frontend.vercel.app/">
              Switch to Clinical Trial
            </a>  
            <a className="login-btn" href="/contact-us">
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
