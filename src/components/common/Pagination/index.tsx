import Link from "next/link";
import SvgComp from "@/components/common/SvgComp";
import style from "./index.module.scss";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  /** Base path without query, e.g. `/blogs` */
  basePath: string;
  className?: string;
};

function pageHref(basePath: string, page: number) {
  if (page <= 1) return basePath;
  return `${basePath}?page=${page}`;
}

/**
 * Frontend pagination for listing pages.
 */
const Pagination = ({
  currentPage,
  totalPages,
  basePath,
  className = "",
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <nav
      className={`${style.pagination} ${className}`.trim()}
      aria-label="Pagination"
    >
      <ul className={style.list}>
        {hasPrev ? (
          <li>
            <Link
              href={pageHref(basePath, currentPage - 1)}
              className={`${style.page} ${style.nav}`}
              data-cursor="link"
              aria-label="Previous page"
            >
              <div className="svg-icon" aria-hidden>
                <SvgComp src="/assets/svg/arrow-prev.svg" />
              </div>
              Prev
            </Link>
          </li>
        ) : null}

        {pages.map((page) => {
          const active = page === currentPage;

          return (
            <li key={page}>
              {active ? (
                <span
                  className={`${style.page} ${style.active}`}
                  aria-current="page"
                >
                  {page}
                </span>
              ) : (
                <Link
                  href={pageHref(basePath, page)}
                  className={style.page}
                  data-cursor="link"
                >
                  {page}
                </Link>
              )}
            </li>
          );
        })}

        <li>
          {hasNext ? (
            <Link
              href={pageHref(basePath, currentPage + 1)}
              className={`${style.page} ${style.nav}`}
              data-cursor="link"
            >
              Next
              <div className="svg-icon" aria-hidden>
                <SvgComp src="/assets/svg/arrow-next.svg" />
              </div>
            </Link>
          ) : (
            <span className={`${style.page} ${style.nav} ${style.disabled}`}>
              Next
              <div className="svg-icon" aria-hidden>
                <SvgComp src="/assets/svg/arrow-next.svg" />
              </div>
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
