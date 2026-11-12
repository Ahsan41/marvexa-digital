import Image from "next/image";
import Button from "@/components/common/Button";
import SvgComp from "@/components/common/SvgComp";
import HeroMotion from "@/components/home/Hero/HeroMotion";
import { homeHero } from "@/data/home";
import style from "./index.module.scss";

/**
 * Homepage hero — server-rendered for LCP; motion is an optional client shell.
 */
const Hero = () => {
  const marqueeItems = [
    ...homeHero.marquee,
    ...homeHero.marquee,
    ...homeHero.marquee,
  ];

  return (
    <HeroMotion>
      <section
        className={style.hero}
        aria-labelledby="home-hero-title"
        data-section="hero"
      >
        <div className={style.atmosphere} aria-hidden data-parallax-depth="0.35">
          <span className={style.orbPrimary} />
          <span className={style.orbSecondary} />
          <span className={style.orbTertiary} />
          <span className={style.particles} />
          <span className={style.mesh} />
        </div>

        <div className={`container ${style.inner}`}>
          <div className={style.copy}>
            <p className={style.eyebrow}>
              <span className={style.eyebrowDot} aria-hidden />
              {homeHero.eyebrow}
            </p>

            <h1 id="home-hero-title" className={style.title}>
              <span className={style.titleLine}>
                <span>
                  {homeHero.titleParts.before}{" "}
                  <span className={style.titleAccent}>
                    {homeHero.titleParts.accent}
                  </span>
                </span>
              </span>
              <span className={style.titleLine}>
                <span>{homeHero.titleParts.after}</span>
              </span>
            </h1>

            <p className={style.desc}>{homeHero.description}</p>

            <div className={style.actions}>
              <Button
                href={homeHero.primaryCta.href}
                data-cursor="magnetic"
              >
                {homeHero.primaryCta.label}
              </Button>
              <Button
                href={homeHero.secondaryCta.href}
                variant="secondary"
                data-cursor="link"
                className={style.secondaryCta}
                icon={
                  <div className="svg-icon" aria-hidden>
                    <SvgComp src="/assets/svg/arrow-next.svg" />
                  </div>
                }
              >
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className={style.visual} data-parallax-depth="1">
            <div className={style.visualCore}>
              <div className={style.visualHalo} aria-hidden />
              <div className={style.visualMedia}>
                <Image
                  src={homeHero.imageSrc}
                  alt={homeHero.imageAlt}
                  fill
                  sizes="(max-width: 991px) 70vw, 352px"
                  className={style.visualImage}
                  priority
                  fetchPriority="high"
                />
              </div>
              <div className={`${style.ring} ${style.ringOuter}`} aria-hidden />
              <div className={`${style.ring} ${style.ringMid}`} aria-hidden />
              <div className={`${style.ring} ${style.ringInner}`} aria-hidden />
            </div>
            <ul
              className={style.floatTags}
              data-parallax-depth="1.6"
              aria-hidden
            >
              {homeHero.floatTags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={style.marquee} aria-hidden>
          <div className={style.marqueeTrack}>
            {marqueeItems.map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    </HeroMotion>
  );
};

export default Hero;
