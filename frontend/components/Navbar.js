'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import { serviceCategories } from '@/lib/servicesData';

const serviceCategoryNames = Object.keys(serviceCategories);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const closeMobileNav = () => {
    setMenuOpen(false);
    setMobileSubmenu(null);
    setMobileServiceCategory(null);
  };

  const closeServicesMenu = () => {
    setActiveMenu(null);
  };

  return (
    <header
      className={isHome ? 'reference-header home-hero-header' : 'reference-header'}
      onMouseLeave={closeServicesMenu}
    >
      <div className="top-nav">
        <Link className="reference-brand" href="/" aria-label="Open Arms Initiative home">
          <img src="/images/logo.svg" alt="Open Arms Initiative" />
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
            onMouseEnter={() => setActiveMenu((prev) => prev || serviceCategoryNames[0])}
          >
            <button type="button" className="nav-services-trigger">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.5s-6.5-4-9-8.2C1.2 8.8 3 5.5 6.2 5.5c1.9 0 3.2 1 3.8 2.1.6-1.1 1.9-2.1 3.8-2.1 3.2 0 5 3.3 3.2 6.8-2.5 4.2-9 8.2-9 8.2Z"/></svg>
              Services<span className="nav-arrow">▾</span>
            </button>
          </div>
          <Link href="/location" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21s-7-6.1-7-11.2A7 7 0 0 1 12 3a7 7 0 0 1 7 6.8C19 14.9 12 21 12 21Z"/><circle cx="12" cy="9.8" r="2.4"/></svg>
            Location
          </Link>
          <Link href="/blogs" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a7 7 0 0 1-7 7H7l-4 3 1-4.5A7 7 0 1 1 21 12Z"/></svg>
            Blogs
          </Link>
          <Link href="/video-gallery" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m10 9.5 5 2.5-5 2.5Z" fill="currentColor" stroke="none"/></svg>
            Video Gallery
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 5h16v13H7l-3 3Z"/></svg>
            Contact
          </Link>
        </nav>

        <nav className={menuOpen ? 'mobile-accordion-nav open' : 'mobile-accordion-nav'}>
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'about' ? null : 'about')}
            >
              About us
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

          <Link href="/blogs" className="mobile-nav-link" onClick={closeMobileNav}>Blog</Link>
          <Link href="/location" className="mobile-nav-link" onClick={closeMobileNav}>Locations</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileNav}>
            Careers at Open Arms Initiative | Therapist Jobs in Oklahoma City (OKC)
          </Link>

          <div className="mobile-nav-item">
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileSubmenu(mobileSubmenu === 'contact' ? null : 'contact')}
            >
              Contact us
              <span className={`mobile-nav-chevron${mobileSubmenu === 'contact' ? ' open' : ''}`}>▾</span>
            </button>
            {mobileSubmenu === 'contact' && (
              <div className="mobile-submenu">
                <Link href="/contact" onClick={closeMobileNav}>Apply Now</Link>
                <Link href="/contact" onClick={closeMobileNav}>Referrals</Link>
                <Link href="/contact" onClick={closeMobileNav}>Donate</Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileNav}>Donate</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={closeMobileNav}>Book a Counseling</Link>
        </nav>

        <Link className="search-icon" href="/faq" aria-label="Search FAQ">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </Link>
        <Link className="reference-cta" href="/contact">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M3 9h18"/><path d="M8 2v4M16 2v4"/></svg>
          Book a Counseling
        </Link>
        <Link className="reference-cta donate" href="/contact">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20.3s-7-4.4-9.5-9C1 8 2.8 4.5 6.2 4.5c2 0 3.4 1.1 4 2.3.6-1.2 2-2.3 4-2.3 3.4 0 5.2 3.5 3.7 6.8-2.5 4.6-9.5 9-9.5 9Z"/></svg>
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
    </header>
  );
}
