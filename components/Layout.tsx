import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: LayoutProps) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a className="m-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Compounds
          </a>
        </Link>

        <Link href="/developers">
          <a className="m-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Developers
          </a>
        </Link>

        <Link href="/units">
          <a className="m-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Units
          </a>
        </Link>

        <Link href="/about">
          <a className="m-2 text-base font-medium text-gray-500 hover:text-gray-900">
            About
          </a>
        </Link>
        <Link href="/users">
          <a className="m-2 text-base font-medium text-gray-500 hover:text-gray-900">
            Users List
          </a>
        </Link>
        <a
          href="/api/users"
          className="m-2 text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Users API
        </a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
