import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export {
  DESKTOP_MQ,
  DESKTOP_MOTION_MQ,
  prefersReducedMotion,
  isFinePointer,
  isDesktopMotionEnabled,
  isDesktopViewport,
} from "./motionGate";

let registered = false;

export function registerGsapPlugins() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
