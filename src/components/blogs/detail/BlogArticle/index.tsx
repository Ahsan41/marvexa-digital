import { Fragment } from "react";
import Image from "next/image";
import SvgComp from "@/components/common/SvgComp";
import type {
  BlogDetail,
  BlogRichBlock,
} from "@/data/blog-details";
import style from "./index.module.scss";

type BlogArticleProps = {
  meta: BlogDetail["meta"];
  featuredImage: BlogDetail["featuredImage"];
  socials: BlogDetail["socials"];
  sections: BlogDetail["sections"];
};

const RichBlock = ({ block }: { block: BlogRichBlock }) => {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }

  if (block.type === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === "quote") {
    return <blockquote>{block.text}</blockquote>;
  }

  return (
    <>
      <h3>{block.title}</h3>
      <p>{block.text}</p>
    </>
  );
};

const BlogArticle = ({
  meta,
  featuredImage,
  socials,
  sections,
}: BlogArticleProps) => {
  return (
    <section
      className={`section-py-100 ${style.section}`}
      aria-label="Blog content"
      data-section="blog-article"
    >
      <div className="container">
        <figure className={style.featured}>
          <div className={style.frame}>
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              sizes="100vw"
              className={style.image}
              loading="lazy"
            />
          </div>
        </figure>

        <div className={style.metaBar}>
          <div className={style.meta}>
            <time>{meta.date}</time>
            <span className={style.dot} aria-hidden />
            <span className={style.author}>By {meta.author}</span>
          </div>

          <ul className={style.socials}>
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-cursor="link"
                >
                  <SvgComp src={social.iconSrc} classes={style.socialIcon} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <article className={`custom-richtext ${style.article}`}>
          {sections.map((section, sectionIndex) => (
            <Fragment key={section.title ?? `intro-${sectionIndex}`}>
              {section.title ? <h2>{section.title}</h2> : null}
              {section.blocks.map((block, index) => (
                <RichBlock
                  key={`${section.title ?? "intro"}-${block.type}-${index}`}
                  block={block}
                />
              ))}
            </Fragment>
          ))}
        </article>
      </div>
    </section>
  );
};

export default BlogArticle;
