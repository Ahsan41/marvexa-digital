import Link from "next/link";
import Image from "next/image";
import SvgComp from "@/components/common/SvgComp";
import style from "./index.module.scss";

type ServicePreviewCardProps = {
  href: string;
  title: string;
  description: string;
  imageSrc?: string;
  index: number;
  total: number;
  labelledBy: string;
  panelId?: string;
};

const ServicePreviewCard = ({
  href,
  title,
  description,
  imageSrc,
  index,
  total,
  labelledBy,
  panelId = "service-preview-panel",
}: ServicePreviewCardProps) => {
  return (
    <Link
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      href={href}
      className={`theme-dark ${style.preview} image-reveal reveal-item`}
      data-image-reveal="scale"
      data-reveal="right"
      data-cursor="view"
      aria-live="polite"
    >
      <div className={style.previewMedia} key={href}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 991px) 100vw, 42vw"
            className={style.previewImage}
          />
        ) : (
          <div className={style.previewFallback} aria-hidden />
        )}
        <div className={style.previewShade} aria-hidden />
      </div>
      <div className={style.previewGlow} aria-hidden />
      <div className={style.previewBody}>
        <p className={style.previewIndex}>
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3 className={style.previewTitle}>{title}</h3>
        <p className={style.previewDesc}>{description}</p>
        <span className={style.previewCta}>
          View service{" "}
          <span className="svg-icon" aria-hidden>
            <SvgComp src="/assets/svg/arrow-next.svg" />
          </span>
        </span>
      </div>
    </Link>
  );
};

export default ServicePreviewCard;
