import dynamic from "next/dynamic";
import InnerHero from "@/components/common/InnerHero";
import LazyMount from "@/components/common/LazyMount";
import BlogArticle from "@/components/blogs/detail/BlogArticle";
import {
  resolveRelatedBlogs,
  type BlogDetail,
} from "@/data/blog-details";

const RelatedBlogs = dynamic(
  () => import("@/components/common/RelatedBlogs"),
);

type BlogDetailPageViewProps = {
  detail: BlogDetail;
};

const BlogDetailPageView = ({ detail }: BlogDetailPageViewProps) => {
  const relatedItems = resolveRelatedBlogs(detail.related.slugs);

  return (
    <>
      <InnerHero
        title={detail.hero.title}
        backgroundImage={detail.hero.backgroundImage}
        backgroundAlt={detail.hero.backgroundAlt}
        breadcrumbs={detail.hero.breadcrumbs}
        titleId="blog-detail-hero-title"
      />

      <BlogArticle
        meta={detail.meta}
        featuredImage={detail.featuredImage}
        socials={detail.socials}
        sections={detail.sections}
      />

      <LazyMount minHeight="30em">
        <RelatedBlogs
          title={detail.related.title}
          cta={detail.related.cta}
          items={relatedItems}
          titleId="blog-related-title"
          dataSection="blog-related"
        />
      </LazyMount>
    </>
  );
};

export default BlogDetailPageView;
