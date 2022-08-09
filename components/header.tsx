import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-10 py-2 md:py-3 shadow-blue-400 shadow-lg">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              title="Deeploy"
              className="flex text-3xl rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <a className="flex text-2xl lg:text-3xl rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                NextJS AI Bot
              </a>
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-900"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span hidden={isOpen} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>

              <span hidden={!isOpen} aria-hidden="true">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/YacineMessaadi/nextjs-openai"
              title=""
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Source Code
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.yacine-messaadi.com"
              title="From Yacine Messaadi"
              className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Yacine Messaadi
            </a>
          </div>
        </div>

        <nav hidden={!isOpen} className="md:hidden">
          <div className="px-1 py-8">
            <div className="grid gap-y-7">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/YacineMessaadi/nextjs-openai"
                title=""
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Source Code
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.yacine-messaadi.com"
                title="From Yacine Messaadi"
                className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Yacine Messaadi
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
