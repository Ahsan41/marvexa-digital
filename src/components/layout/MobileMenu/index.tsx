"use client";

import { useEffect, useRef, type CSSProperties, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/common/Button";
import { contactInfo, navigation, primaryCta } from "@/data/site";
import type { NavItem } from "@/types/content";
import style from "./index.module.scss";

type MobileMenuProps = {
  id: string;
  open: boolean;
  isDesktop: boolean;
  onClose: () => void;
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
};

const MobileMenu = ({
  id,
  open,
  isDesktop,
  onClose,
  openIndex,
  setOpenIndex,
}: MobileMenuProps) => {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open || isDesktop) return;
    const first = navRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
  }, [open, isDesktop]);

  if (isDesktop) return null;

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <div
      id={id}
      className={`${style.drawer} ${open ? style.open : ""}`}
      aria-hidden={!open}
      data-lenis-prevent
    >
      <nav ref={navRef} className={style.nav} aria-label="Primary">
        <ul className={style.menu}>
          {navigation.map((item, index) => {
            const hasChildren = !!item.children?.length;
            const isOpen = openIndex === index;
            const active = isActive(item);

            return (
              <li
                key={item.href}
                className={`${style.item} ${isOpen ? style.itemOpen : ""} ${active ? style.active : ""}`}
                style={{ "--i": index } as CSSProperties}
              >
                {hasChildren ? (
                  <>
                    <div className={style.parentRow}>
                      <Link
                        href={item.href}
                        className={style.link}
                        aria-current={active ? "page" : undefined}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className={style.toggle}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label} submenu`}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className={style.chevron} aria-hidden />
                      </button>
                    </div>
                    <div className={style.panel}>
                      <div className={style.panelInner}>
                        <ul className={style.subList}>
                          {item.children?.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                className={style.subLink}
                                onClick={onClose}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={style.link}
                    aria-current={active ? "page" : undefined}
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className={style.footer}>
          <Button href={primaryCta.href} onClick={onClose}>
            {primaryCta.label}
          </Button>
          <a href={contactInfo.phoneHref} className={style.contact} onClick={onClose}>
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className={style.contact}
            onClick={onClose}
          >
            {contactInfo.email}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
