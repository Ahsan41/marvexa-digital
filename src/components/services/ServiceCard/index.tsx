import Link from "next/link";
import Image from "next/image";
import SvgComp from "@/components/common/SvgComp";
import type { ServiceListingItem } from "@/data/services";
import style from "./index.module.scss";

type ServiceCardProps = {
  item: ServiceListingItem;
  index: number;
};

const glowClass = [style.glowTr, style.glowTl, style.glowBr] as const;
const positionClass = [
  style.posCenter,
  style.posTop,
  style.posBottom,
] as const;

/**
 * Cinematic services listing card — full-bleed image composition + subtle CTA.
 * Glow / image position cycle from index (not CMS fields).
 */
const ServiceCard = ({ item, index }: ServiceCardProps) => {
  const glow = glowClass[index % glowClass.length];
  const pos = positionClass[index % positionClass.length];

  return (
    <Link
      href={item.href}
      className={`theme-dark ${style.card} ${glow} reveal-item image-reveal`}
      data-reveal={index % 3 === 0 ? "up" : index % 3 === 1 ? "rise" : "scale"}
      data-image-reveal="scale"
      data-cursor="view"
    >
      <div className={style.media} aria-hidden>
        {item.imageSrc ? (
          <Image
            src={item.imageSrc}
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
            className={`${style.image} ${pos}`}
            loading="lazy"
          />
        ) : (
          <div className={style.fallback} />
        )}
        <div className={style.shade} />
        <div className={style.sweep} />
      </div>

      <div className={style.aura} aria-hidden />

      <div className={style.top}>
        <span className={style.index}>{String(index + 1).padStart(2, "0")}</span>
        <div className={style.cornerArrow} aria-hidden>
          <SvgComp
            src="/assets/svg/arrow-next.svg"
            classes="svg-icon svg-icon--up-right"
          />
        </div>
      </div>

      <div className={style.body}>
        <p className={style.label}>Service</p>
        <h2 className={style.title}>{item.title}</h2>
        <p className={style.description}>{item.description}</p>
        <span className={style.cta}>
          Explore service
          <div className={`${style.ctaArrow} svg-icon`} aria-hidden>
            <SvgComp src="/assets/svg/arrow-next.svg" />
          </div>
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
