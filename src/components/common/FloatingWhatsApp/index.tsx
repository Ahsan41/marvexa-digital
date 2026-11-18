import Image from "next/image";
import style from "./index.module.scss";

const FloatingWhatsApp = () => (
  <a
    className={style.button}
    href="https://wa.me/923462026316"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with Marvexa Digital on WhatsApp"
  >
    <Image
      className={style.icon}
      src="/whatsapp-sticky.svg"
      alt=""
      width={52}
      height={52}
    />
  </a>
);

export default FloatingWhatsApp;
