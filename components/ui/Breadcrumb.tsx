import Link from 'next/link';

interface Item { label: string; href?: string }

export default function Breadcrumb({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site py-3">
      <ol className="flex items-center gap-1.5 text-xs text-grey-text flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-grey-border">›</span>}
            {item.href && i < items.length - 1
              ? <Link href={item.href} className="hover:text-brand transition-colors">{item.label}</Link>
              : <span className="text-charcoal font-medium">{item.label}</span>
            }
          </li>
        ))}
      </ol>
    </nav>
  );
}
