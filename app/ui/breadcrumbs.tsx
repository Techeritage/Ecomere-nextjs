import clsx from "clsx";
import Link from "next/link";
import { ptSans } from "./fonts";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 block bg-[#f2f2f2] px-[3%] py-2 md:px-[10%]"
    >
      <ol className={clsx(ptSans.className, "flex mb-0 pl-0")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(breadcrumb.active ? "text-orange" : "text-gray-800")}
          >
            <Link
              className={clsx(
                breadcrumb.active
                  ? "text-orange no-underline font-bold"
                  : "text-gray-700 no-underline"
              )}
              href={breadcrumb.href}
            >
              {breadcrumb.label}
            </Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
