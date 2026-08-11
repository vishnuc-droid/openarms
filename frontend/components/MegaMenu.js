'use client';

import Link from 'next/link';

export default function MegaMenu({ menu, categories, activeCategory, onSelectCategory, onClose }) {
  if (!menu) return null;

  return (
    <div className="mega-menu" onMouseLeave={onClose}>
      {categories && (
        <div className="mega-tabs">
          {categories.map((name) => (
            <button
              key={name}
              type="button"
              className={activeCategory === name ? 'active' : ''}
              onMouseEnter={() => onSelectCategory(name)}
              onClick={() => onSelectCategory(name)}
            >
              {name}
            </button>
          ))}
        </div>
      )}
      <div className="mega-content">
        <div className="mega-links">
          <h2>{menu.heading}</h2>
          <div>
            {menu.links.map((link) => (
              <Link
                href={`/services/${link.slug}`}
                key={link.slug}
                onClick={onClose}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <h3>Take the First Step towards Wellness.</h3>
        </div>

        <aside>
          <div>
            <h2>{menu.sideTitle}</h2>
            {menu.sideLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                onClick={onClose}
              >
                {link.name} <span>→</span>
              </Link>
            ))}
          </div>
          {menu.image && <img src={menu.image} alt={menu.heading} />}
        </aside>
      </div>
    </div>
  );
}
