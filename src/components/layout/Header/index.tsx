"use client";

import { useEffect, useId, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/common/Button";
import { navigation, primaryCta, siteConfig } from "@/data/site";
import type { NavItem } from "@/types/content";
import style from "./index.module.scss";

const MobileMenu = dynamic(() => import("@/components/layout/MobileMenu"), {
  ssr: false,
});

const DESKTOP_MQ = "(min-width: 1200px)";
const STICKY_ON = 24;
const STICKY_OFF = 8;

const Header = () => {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobileNavReady, setMobileNavReady] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const stickyRef = useRef(false);
  const menuId = useId();

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
    setOpenIndex(null);
  }

  useEffect(() => {
    const syncSticky = () => {
      const y = window.scrollY;
      const next = stickyRef.current ? y > STICKY_OFF : y > STICKY_ON;
      if (next === stickyRef.current) return;
      stickyRef.current = next;
      setSticky(next);
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncSticky();
        ticking = false;
      });
    };

    syncSticky();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    const sync = () => {
      const desktop = mq.matches;
      setIsDesktop(desktop);
      setMobileNavReady(!desktop);
      if (desktop) setMenuOpen(false);
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", menuOpen);
    return () => {
      document.documentElement.classList.remove("menu-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenIndex(null);
  };

  return (
    <header
      className={`${style.header} ${sticky ? style.sticky : ""} ${menuOpen ? style.menuOpen : ""}`}
    >
      <div className={style.shell}>
        <div className={`container ${style.inner}`}>
          <Link href="/" className={style.logo} aria-label={siteConfig.name}>
            <Image
              className={style.logoImage}
              src="/assets/marvexa-logo-horizontal-light.webp"
              alt=""
              width={1506}
              height={450}
              priority
            />
          </Link>

          <nav className={style.desktopNav} aria-label="Primary">
            <ul className={style.menu}>
              {navigation.map((item, index) => {
                const hasChildren = !!item.children?.length;
                const open = openIndex === index;
                const active = isActive(item);

                return (
                  <li
                    key={item.href}
                    className={`${style.menuItem} ${open ? style.open : ""} ${active ? style.active : ""}`}
                    onMouseEnter={() => hasChildren && setOpenIndex(index)}
                    onMouseLeave={() => setOpenIndex(null)}
                  >
                    {hasChildren ? (
                      <>
                        <Link
                          href={item.href}
                          className={style.menuLink}
                          aria-expanded={open}
                          aria-haspopup="true"
                          aria-current={active ? "page" : undefined}
                          onFocus={() => setOpenIndex(index)}
                        >
                          {item.label}
                          <span className={style.chevron} aria-hidden />
                        </Link>
                        <div
                          className={style.dropdown}
                          role="region"
                          aria-label={`${item.label} submenu`}
                        >
                          <ul className={style.dropdownList}>
                            {item.children?.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  className={style.dropdownLink}
                                  onClick={() => setOpenIndex(null)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={style.menuLink}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={style.actions}>
            <Button href={primaryCta.href} className={style.cta}>
              {primaryCta.label}
            </Button>

            <button
              type="button"
              className={`${style.hamburger} ${menuOpen ? style.hamburgerActive : ""}`}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {mobileNavReady ? (
        <MobileMenu
          id={menuId}
          open={menuOpen}
          isDesktop={isDesktop}
          onClose={closeMenu}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      ) : null}
    </header>
  );
};

export default Header;
