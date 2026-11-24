import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";

const navItems = [
  ["Home", "/"],
  ["Work", "/work"],
  ["Services", "/services"],
  ["Studio", "/studio"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Driels home">*DRIELS</Link>
      <nav id="main-menu" className={open ? "nav open" : "nav"} aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <NavLink key={href} to={href}>{label}</NavLink>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="main-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-wordmark" to="/" aria-label="Driels home"><span>STUDIO</span><span>DRIELS</span></Link>
      <p className="legal">Imprint · Privacy Policy · Terms &amp; Conditions · Cookie Settings<br />© 2026 *DRIELS. All rights reserved.</p>
      <nav className="footer-nav" aria-label="Footer navigation">
        {navItems.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}
      </nav>
      <div className="socials">
        <a href="https://www.instagram.com/">Instagram</a>
        <a href="https://www.linkedin.com/">LinkedIn</a>
        <a href="https://www.facebook.com/">Facebook</a>
        <a href="https://www.tiktok.com/">Tiktok</a>
        <span>+49 08807 28372</span>
      </div>
    </footer>
  );
}

function InternalLinkScrollReset() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    const root = document.documentElement;
    const inlineBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
    root.style.scrollBehavior = inlineBehavior;
  };

  useEffect(() => {
    const reset = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a");
      if (!link?.getAttribute("href")?.startsWith("/")) return;
      scrollToTop();
    };

    document.addEventListener("click", reset, true);
    return () => document.removeEventListener("click", reset, true);
  }, []);

  useEffect(() => {
    scrollToTop();
    const timer = window.setTimeout(scrollToTop, 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <>
      <InternalLinkScrollReset />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  );
}

export function PageTitle({ children }: { children: React.ReactNode }) {
  const title = String(children);
  return (
    <h1
      className={title === "Contact" ? "page-title page-title-contact" : "page-title"}
      style={{ "--title-length": Math.max(title.length, 1) } as React.CSSProperties}
    >
      {children}
    </h1>
  );
}

export function ProjectCard({
  title,
  category,
  image,
  slug,
}: {
  title: string;
  category: string;
  image: string;
  slug: string;
}) {
  return (
    <Link className="project-card" to={`/work/${slug}`} style={{ backgroundImage: `url("${image}")` }}>
      <span className="project-card-title">{title}</span>
      <span className="project-card-category">{category}</span>
      <span className="more">More...</span>
    </Link>
  );
}
