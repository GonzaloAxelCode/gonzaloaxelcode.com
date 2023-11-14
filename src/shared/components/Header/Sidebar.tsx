"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { pathsNavHeader } from ".";
import Link from "next/link";
import Switcher from "../SwitcherDark";
import Logo from "../Logo/Index";

const Sidebar = ({ open, setOpen }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-[300px]">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div
                    className="relative flex h-full flex-col  overflow-hidden bg-white dark:bg-blackbg  shadow-xl"
                    style={{
                      backgroundImage:
                        "url(https://res.cloudinary.com/ddksrkond/image/upload/e_blur:900/v1699402460/docs_tinypng.d9e4dcdc_fjao77.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div className="py-16 flex-1 px-6 sm:px-6">
                      <Link href="/" className="absolute left-7 top-3">
                        <Logo />
                      </Link>
                      <button className="absolute right-12 top-6">
                        <Switcher />
                      </button>
                      <button>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"></path>
                        </svg>
                      </button>

                      <div className="flex flex-col gap-2">
                        {pathsNavHeader.map((el: any, index: any) => {
                          return (
                            <Link
                              href={el.path}
                              onClick={() => setOpen(false)}
                              key={index}
                              className="flex"
                            >
                              <span style={{ fontSize: "12px" }}>
                                0{index + 1}
                              </span>
                              <span className="text-2xl ml-2 font-headings">
                                {el.text}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Sidebar;
