'use client';

import { useState } from 'react';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import { serviceCategories, trainingSpeakingMenu } from '@/lib/servicesData';

const serviceCategoryNames = Object.keys(serviceCategories);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [trainingMenuOpen, setTrainingMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null);
  const closeMobileNav = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setMobileServiceCategory(null);
  };

  const closeServicesMenu = () => {
    setActiveMenu(null);
    setTrainingMenuOpen(false);
  };

  return (
    <header
      className="reference-header home-hero-header"
      onMouseLeave={closeServicesMenu}
    >
      <div className="top-nav">
        <Link className="reference-brand" href="/" aria-label="Open Arms Initiative home">
          <img src="/images/logo-full.png" alt="Open Arms Initiative" />
        </Link>

        <button
          className="menu-button reference-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? 'reference-links open' : 'reference-links'}>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
            About Us
          </Link>
          <div
            className="nav-services-item"
            onMouseEnter={() => { setTrainingMenuOpen(false); setActiveMenu((prev) => prev || serviceCategoryNames[0]); }}
          >
            <button type="button" className="nav-services-trigger">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
              Services<span className="nav-arrow">▾</span>
            </button>
          </div>
          <div
            className="nav-services-item"
            onMouseEnter={() => { setActiveMenu(null); setTrainingMenuOpen(true); }}
          >
            <button type="button" className="nav-services-trigger">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="7" r="2.6"/><circle cx="5" cy="9" r="2.1"/><circle cx="19" cy="9" r="2.1"/><path d="M12 12c-3 0-5.2 1.8-5.2 4.6V19h10.4v-2.4C17.2 13.8 15 12 12 12Z"/><path d="M5 12.4c-2 .3-3.2 1.7-3.2 3.7V18h3.6M19 12.4c2 .3 3.2 1.7 3.2 3.7V18h-3.6"/></svg>
              Training &amp; Speaking<span className="nav-arrow">▾</span>
            </button>
          </div>
          <Link href="/foster-care" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9h12v-9"/><path d="M10 19v-5h4v5"/></svg>
            Foster Care
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a7 7 0 0 1-7 7H7l-4 3 1-4.5A7 7 0 1 1 21 12Z"/></svg>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v13H7l-3 3Z"/></svg>
            Contact Us
          </Link>
        </nav>

        <nav className={menuOpen ? 'mobile-accordion-nav open' : 'mobile-accordion-nav'}>
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
            >
              About Us
              <span className={`mobile-nav-chevron${mobileSubmenu === 'about' ? ' open' : ''}`}>▾</span>
            </button>
            {mobileSubmenu === 'about' && (
              <div className="mobile-submenu">
                <Link href="/about-us" onClick={closeMobileNav}>Our Team</Link>
                <Link href="/about-us" onClick={closeMobileNav}>Testimonials</Link>
                <Link href="/video-gallery" onClick={closeMobileNav}>Video Gallery</Link>
              </div>
            )}
          </div>

          <div className="mobile-nav-item">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')}
            >
              Services
              <span className={`mobile-nav-chevron${mobileSubmenu === 'services' ? ' open' : ''}`}>▾</span>
            </button>
            {mobileSubmenu === 'services' && (
              <div className="mobile-submenu mobile-submenu-services">
                {Object.entries(serviceCategories).map(([name, cat]) => (
                  <div key={name} className="mobile-service-category">
                    <button
                      type="button"
                      className="mobile-service-category-toggle"
                      onClick={() => setMobileServiceCategory(mobileServiceCategory === name ? null : name)}
                    >
                      {name}
                      <span className={`mobile-nav-chevron${mobileServiceCategory === name ? ' open' : ''}`}>▾</span>
                    </button>
                    {mobileServiceCategory === name && (
                      <div className="mobile-service-links">
                        {cat.links.map((link) => (
                          <Link
                            key={link.slug}
                            href={link.href || `/services/${link.slug}`}
                            onClick={closeMobileNav}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mobile-nav-item">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'training' ? null : 'training')}
            >
              Training &amp; Speaking
              <span className={`mobile-nav-chevron${mobileSubmenu === 'training' ? ' open' : ''}`}>▾</span>
            </button>
            {mobileSubmenu === 'training' && (
              <div className="mobile-submenu">
                {trainingSpeakingMenu.links.map((link) => (
                  <Link key={link.slug} href={link.href} onClick={closeMobileNav}>{link.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/foster-care" className="mobile-nav-link" onClick={closeMobileNav}>Foster Care</Link>
          <Link href="/blogs" className="mobile-nav-link" onClick={closeMobileNav}>Blog</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileNav}>Contact Us</Link>

          <a href="tel:14059208934" className="mobile-nav-link mobile-nav-phone" onClick={closeMobileNav}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
            (405) 920-8934
          </a>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileNav}>Donate</Link>
        </nav>

        <a href="tel:14059208934" className="header-phone" aria-label="Call our office">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.4 2.1L8 10.3a16 16 0 0 0 6 6l1.5-1.4a2 2 0 0 1 2.1-.4c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2z"/></svg>
          <span>(405) 920-8934</span>
        </a>
        <Link className="reference-cta" href="/contact">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M8 2v4M16 2v4"/></svg>
          Book an Appointment
        </Link>
        <Link className="reference-cta-donate-small" href="/contact" aria-label="Donate">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.3s-7-4.4-9.5-9C1 8 2.8 4.5 6.2 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.7 6.8-2.5 4.6-9.5 9-9.5 9Z"/></svg>
          Donate
        </Link>
      </div>

      {activeMenu && (
        <MegaMenu
          menu={serviceCategories[activeMenu]}
          categories={serviceCategoryNames}
          activeCategory={activeMenu}
          onSelectCategory={setActiveMenu}
          onClose={() => setActiveMenu(null)}
        />
      )}

      {trainingMenuOpen && (
        <MegaMenu
          menu={trainingSpeakingMenu}
          categories={null}
          activeCategory={null}
          onSelectCategory={() => {}}
          onClose={() => setTrainingMenuOpen(false)}
        />
      )}
    </header>
  );
}
