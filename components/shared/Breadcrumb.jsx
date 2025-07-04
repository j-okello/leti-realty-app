import React from "react";
import Link from "next/link";
import { House, ChevronRight } from "lucide-react";

const Breadcrumb = ({
  items = [],
  homeIcon = <House className="w-4 h-4" />,
  separator = <ChevronRight className="w-4 h-4 text-gray-400" />,
  className = "text-sm text-gray-600 mb-4  cursor-pointer mt-20 ",
  itemClassName = "text-blue-900 hover:underline text-blue-900",
  activeItemClassName = "text-gray-500",
  separatorClassName = "text-gray-400",
}) => {
  // Ensure the last item doesn't have a href
  const processedItems = items.map((item, index) => ({
    ...item,
    href: index === items.length - 1 ? undefined : item.href,
  }));

  return (
    <nav className={className} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1 flex-wrap">
        <li className="flex items-center">
          <Link
            href="/"
            className={`flex items-center ${itemClassName}`}
            aria-label="Home"
          >
            {homeIcon}
          </Link>
        </li>

        {processedItems.map((item, idx) => (
          <React.Fragment key={`${item.label}-${idx}`}>
            <li className="flex items-center">
              <span className={`mx-1 ${separatorClassName}`}>{separator}</span>
            </li>
            <li className="flex items-center">
              {item.href ? (
                <Link href={item.href} className={itemClassName}>
                  {item.label}
                </Link>
              ) : (
                <span className={activeItemClassName} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
