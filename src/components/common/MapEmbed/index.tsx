import style from "./index.module.scss";

type MapEmbedProps = {
  title: string;
  /** Google Maps embed URL — leave empty until configured */
  src?: string;
  className?: string;
};

/**
 * Responsive Google Maps iframe section.
 * Pass `src` when the embed URL is available; otherwise a clean placeholder renders.
 */
const MapEmbed = ({ title, src = "", className = "" }: MapEmbedProps) => {
  const hasMap = Boolean(src.trim());

  return (
    <section
      className={`section-py-100 ${style.section} ${className}`.trim()}
      aria-label={title}
      data-section="map"
    >
      <div className={`container ${style.inner}`}>
        <div className={style.frame}>
          {hasMap ? (
            <iframe
              title={title}
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className={style.iframe}
            />
          ) : (
            <div className={style.placeholder} role="status">
              <p>
                Map embed URL not configured yet. Set{" "}
                <code>mapEmbedSrc</code> in site data when ready.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapEmbed;
