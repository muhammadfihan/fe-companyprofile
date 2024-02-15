"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

const products = [
  {
    name: "Custom Software Development",
    description: "Get a better understanding of your traffic",
    href: "/pages/our-solution/custom-development",
    icon: ChartPieIcon,
  },
  {
    name: "Asset Management",
    description: "Speak directly to your customers",
    href: "/pages/our-solution/asset-management",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Klaim Management",
    description: "Your customers’ data will be safe and secure",
    href: "/pages/our-solution/claim-management",
    icon: FingerPrintIcon,
  },
  {
    name: "Principal Product",
    description: "Connect with third-party tools",
    href: "/pages/our-solution/principal-product",
    icon: SquaresPlusIcon,
  },
  {
    name: "Developer as a Service",
    description: "Build strategic funnels that will convert",
    href: "/pages/our-solution/dev-service",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white fixed top-0 w-full h-20 z-30 ">
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-20 mt-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 focus:outline-none">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="../../../code.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            className={`text-md font-medium leading-6 text-gray-900 link ${
              pathname === "/" ? "text-red-500" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Popover className="relative">
            <Popover.Button
              className={`flex outline-none items-center gap-x-1 text-md font-medium leading-6 text-gray-900  ${
                pathname === "/pages/our-solution/custom-development" ||
                pathname === "/pages/our-solution/principal-product" ||
                pathname === "/pages/our-solution/dev-service"
                  ? "text-red-500"
                  : ""
              }`}
            >
              Our Solution
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-44 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className={`h-6 w-6 text-gray-600 group-hover:text-red-500 ${
                            pathname === item.href ? "text-red-500" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className={`block font-semibold text-gray-900 ${
                            pathname === item.href ? "text-red-500" : ""
                          }`}
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link
            className={`text-md font-medium leading-6 text-gray-900 link ${
              pathname === "/pages/our-work" ? "text-red-500" : ""
            }`}
            href="/pages/our-work"
          >
            Our Work
          </Link>
          <Link
            className={`text-md font-medium leading-6 text-gray-900 link ${
              pathname === "/pages/career" ? "text-red-500" : ""
            }`}
            href="/pages/career"
          >
            Career
          </Link>

          <Link
            className={`text-md font-medium leading-6 text-gray-900 link ${
              pathname === "/pages/contact" ? "text-red-500" : ""
            }`}
            href="/pages/contact"
          >
            Contact Us
          </Link>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 backdrop-blur-sm " />
        <Dialog.Panel className="fixed  inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 animate-fade-left animate-once animate-duration-[500ms] animate-delay-0 animate-ease-in ">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="../../../code.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  className={`text-md block font-semibold leading-6 text-gray-900 link ${
                    pathname === "/" ? "text-red-500" : ""
                  }`}
                  href="/"
                >
                  Home
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? "rotate-180" : "", "h-5 w-5 flex-none")}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            <Link href={item.href}> {item.name}</Link>
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                    pathname === "/pages/our-work" ? "text-red-500" : ""
                  }`}
                  href="/pages/our-work"
                >
                  Our Work
                </Link>
                <Link
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                    pathname === "/pages/career" ? "text-red-500" : ""
                  }`}
                  href="/pages/career"
                >
                  Career
                </Link>
                <Link
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 link ${
                    pathname === "/pages/contact" ? "text-red-500" : ""
                  }`}
                  href="/pages/contact"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
