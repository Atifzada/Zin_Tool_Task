// components/FooterLinks.tsx
import Link from "next/link";

interface LinkItem {
  text: string;
  url: string;
}

interface Column {
  heading: string;
  links: LinkItem[];
}

interface FooterLinksProps {
  columns: Column[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ columns }) => {
  return (
    <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 py-4">
      {columns.map((column, index) => (
        <div key={index}>
          <h3 className="text-md font-semibold mb-4">{column.heading}</h3>
          <ul>
            {column.links.map((link, linkIndex) => (
              <li key={linkIndex} className="mb-2">
                <Link href={link.url}>
                  <span className="cursor-pointer hover:text-gray-600">
                    {link.text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
