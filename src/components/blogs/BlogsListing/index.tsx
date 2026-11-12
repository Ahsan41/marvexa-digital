import BlogCard from "@/components/blogs/BlogCard";
import Pagination from "@/components/common/Pagination";
import type { BlogListingItem } from "@/data/blogs";
import style from "./index.module.scss";

type BlogsListingProps = {
  items: BlogListingItem[];
  currentPage: number;
  totalPages: number;
  prioritizeFirstImage?: boolean;
};

const BlogsListing = ({
  items,
  currentPage,
  totalPages,
  prioritizeFirstImage = false,
}: BlogsListingProps) => {
  return (
    <section
      className={`section-py-100 ${style.section} reveal`}
      aria-labelledby="blogs-listing-title"
      data-section="blogs-listing"
    >
      <div className="container">
        <h2 id="blogs-listing-title" className="sr-only">
          Latest articles
        </h2>

        {items.length > 0 ? (
          <ul className={style.grid}>
            {items.map((item, index) => (
              <li key={item.slug} className={style.item}>
                <BlogCard
                  item={item}
                  index={index}
                  priority={prioritizeFirstImage && index === 0}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className={style.empty}>No articles available yet.</p>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/blogs"
        />
      </div>
    </section>
  );
};

export default BlogsListing;
