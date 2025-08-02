import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react/dist/ssr';

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative">
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
          <div className="flex-1">
            <Link href="/" className="btn btn-ghost text-xl">
              Tim Ruesink
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/experience">Experience</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>{children}</div>
        <footer className="footer footer-horizontal footer-center bg-primary text-primary-content p-10 gap-4">
          <aside>
            <p className="font-bold">Tim Ruesink</p>
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </aside>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link href="https://github.com/Truesink">
                <GithubLogoIcon size={24} weight="fill" />
              </Link>
              <Link href="https://www.linkedin.com/in/tim-ruesink/">
                <LinkedinLogoIcon size={24} weight="fill" />
              </Link>
            </div>
          </nav>
        </footer>
      </body>
    </html>
  );
}
