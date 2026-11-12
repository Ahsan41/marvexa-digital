"use client";

import { useSyncExternalStore, type ReactNode } from "react";

type ClientOnlyProps = {
  children: ReactNode;
  /** Stable SSR/CSR placeholder to avoid layout jump */
  fallback?: ReactNode;
};

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Renders children only after mount — prevents Swiper/DOM libraries
 * from hydrating against mismatched server HTML.
 */
const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
};

export default ClientOnly;
