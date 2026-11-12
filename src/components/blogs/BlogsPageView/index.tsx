import dynamic from "next/dynamic";
import InnerHero from "@/components/common/InnerHero";
import BlogsListing from "@/components/blogs/BlogsListing";
import { blogsPage, getBlogsPage } from "@/data/blogs";
import { homeContact } from "@/data/home";

const ContactSection = dynamic(
  () => import("@/components/common/ContactSection"),
);

type BlogsPageViewProps = {
  page?: number;
};

const BlogsPageView = ({ page = 1 }: BlogsPageViewProps) => {
  const { hero } = blogsPage;
  const { items, currentPage, totalPages } = getBlogsPage(page);

  return (
    <>
      <InnerHero
        title={hero.title}
        backgroundImage={hero.backgroundImage}
        titleId="blogs-hero-title"
      />
      <BlogsListing
        items={items}
        currentPage={currentPage}
        totalPages={totalPages}
        prioritizeFirstImage={currentPage === 1}
      />
      <ContactSection
        eyebrow={homeContact.eyebrow}
        title={homeContact.title}
        description={homeContact.description}
        imageSrc={homeContact.imageSrc}
        form={homeContact.form}
        titleId="blogs-contact-title"
      />
    </>
  );
};

export default BlogsPageView;
