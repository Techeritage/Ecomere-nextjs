import { clsx } from 'clsx';
import Link from 'next/link';
import { Breadcrumb } from '../lib/definitions';
import { inter } from './fonts';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="px-[3%] md:px-[10%] my-4 block">
      <ol className={clsx(inter.className, 'pl-0 flex text-xl md:text-2xl mb-0')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'flex items-center' : 'flex items-center',
            )}
          >
            <Link className={clsx(
              breadcrumb.active ? 'text-orange no-underline text-sm font-semibold' : 'text-gray-500 no-underline text-sm', 
            )} href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-2 inline-block"><ChevronRightIcon width={15} /></span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
