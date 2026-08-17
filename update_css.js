const fs = require('fs');
let css = fs.readFileSync('frontend/app/globals.css', 'utf8');

// 1. `.family-challenge-grid` padding edit
const origGrid = '.family-challenge-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:0 24px;margin-top:39px}.family-challenge-grid article{text-align:center;padding:0}';
const newGrid = '.family-challenge-grid{display:grid;grid-template-columns:repeat(6,1fr);margin-top:39px}.family-challenge-grid article{text-align:center;padding:0 12px;border-right:1px solid #d8dbc8}.family-challenge-grid article:last-child{border:0}';
css = css.replace(origGrid, newGrid);

// 2. Add `.marriage-challenges` mobile media query at the end
const mobileMediaQuery = `
@media (max-width: 380px) {
  .marriage-challenges .marriage-container > div {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .marriage-challenges article {
    padding: 0;
  }
}
`;
if (!css.includes('@media (max-width: 380px)')) {
  css += mobileMediaQuery;
}

// 3. Add `.desktop-pill-header` at the end
const desktopPillHeader = `
@media (min-width: 1025px) {
  .desktop-pill-header {
    background: transparent;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }
  .desktop-pill-header .top-nav {
    margin: 18px max(1rem, calc((100vw - 1440px) / 2 + 0.5rem));
    padding: 8px 20px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(10px);
    box-shadow: 0 12px 34px rgba(5, 46, 38, 0.14);
    border-bottom: none;
    min-height: 64px;
  }
  .desktop-pill-header .reference-brand {
    background: #052E26;
    padding: 8px 16px;
    border-radius: 10px;
  }
  .desktop-pill-header .reference-links a,
  .desktop-pill-header .nav-services-trigger {
    color: #052E26;
  }
  .desktop-pill-header .reference-links a:hover,
  .desktop-pill-header .nav-services-trigger:hover {
    color: #3F6B2B;
  }
  .desktop-pill-header .reference-menu-button {
    color: #052E26;
  }
  .desktop-pill-header .search-icon {
    color: #052E26;
  }
  .desktop-pill-header .reference-cta {
    border-radius: 999px;
    background: #052E26;
    color: #ffffff;
  }
  .desktop-pill-header .reference-cta.donate {
    background: #ffffff;
    color: #052E26;
    border: 1.5px solid #052E26;
  }
}
`;
if (!css.includes('.desktop-pill-header')) {
  css += desktopPillHeader;
}

// 4. Hero sections 100vh
const replacements = [
  {
    orig: '.marriage-hero{padding:55px 0 36px;background:radial-gradient(circle at 2% 10%,#fff,transparent 28%),#fbf8ed}',
    new: '.marriage-hero{padding:55px 0 36px;background:radial-gradient(circle at 2% 10%,#fff,transparent 28%),#fbf8ed;min-height:100vh;display:flex;flex-direction:column;justify-content:center}'
  },
  {
    orig: '.grief-hero{background:var(--cream);overflow:hidden}',
    new: '.grief-hero{background:var(--cream);overflow:hidden;min-height:100vh;display:flex;flex-direction:column;justify-content:center}'
  },
  {
    orig: '.da-hero{padding:52px 0 36px}',
    new: '.da-hero{padding:52px 0 36px;min-height:100vh;display:flex;flex-direction:column;justify-content:center}'
  },
  {
    orig: '.contact-hero { position: relative; height: 492px; overflow: hidden; display: flex; justify-content: center; color: #fff; }',
    new: '.contact-hero { position: relative; min-height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; color: #fff; }'
  },
  {
    orig: '.family-hero-bg{container-type:size;position:relative;width:100%;height:calc(100vh - 76px);overflow:hidden;display:flex;align-items:center}',
    new: '.family-hero-bg{container-type:size;position:relative;width:100%;min-height:100vh;overflow:hidden;display:flex;align-items:center}'
  }
];

const locOrig = \`.location-hero-section {
  position: relative;
  overflow: hidden;
  background: #F7F5EE;
  padding: 110px 24px 130px;
}\`;
const locNew = \`.location-hero-section {
  position: relative;
  overflow: hidden;
  background: #F7F5EE;
  padding: 110px 24px 130px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}\`;
css = css.replace(locOrig, locNew);

for (const rep of replacements) {
  css = css.replace(rep.orig, rep.new);
}

fs.writeFileSync('frontend/app/globals.css', css);
console.log('Fixed CSS.');
