"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const assets = {
  gradient:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F266e05dba3864799b4715cf4bfd8aa2a",
  square:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8997f779f33b430bb22ca667d1b73ade",
  figma:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fe82b4bbd5a7c45b49897b9570893dfe2",
  react:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F95c70a06f779481a957c2b384e3a270d",
  svelte:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ffbe9dfb6bb09448ba4fe5feb4bb0e53e?format=webp",
  tailwind:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8d0b6724f6f6496dbf124bfc3af2a0b0?format=webp",
  vue: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F73a54a19443e48fab077e6f21687cd20?format=webp",
  qwik: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fddb7b5acc2d747f198e8ed90dc245f1a",
  safari:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F22ac9809c08e438db8e5716758a0b4ee?format=webp",
  chrome:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Ff4c72f33c40b4b7bb220cffbc17ef2c2",
  mobile:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fc9bace408c6a4ab6b13a24b947f96517",
  desktop:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F0cd3a13636be4aff87208714780c356c",
  builder:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F539de6bea0334a14afdfcccd452bf8a8",
  figmatwo:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8e5e45f981514bac840e2a5f1d46e579",
  cursor:
    "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fbba6d6b3473d436098e3637650f64ee2",
};
const frameworks = ["tailwind", "vue", "safari", "svelte"] as const;

type Framework = (typeof frameworks)[number];

import { cn } from "tailwind-cn";

export default function Test() {
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworks[0]
  );

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setCurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length;
    };
    const intervalId = setInterval(rotateFrameworks, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <div
        className={cn(
          "fixed inset-0 transition-color delay-100 duration-700 opacity-25"
        )}
      />
      <div className="fixed inset-0 opacity-30" />
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={`text-7xl max-w-3xl text-center leading-snug mb-12 `}>
            to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span
              className={cn("transition-colors duration-200", {
                "text-sky-300": currentFramework === "safari",
                "text-teal-300": currentFramework === "tailwind",
                "text-green-300": currentFramework === "vue",
                "text-orange-400": currentFramework === "svelte",
              })}
            >
              never
            </span>{" "}
            be the same again
          </h1>

          <div className="mb-8">
            <button
              ref={buttonRef}
              className={cn(
                "text-black px-6 py-3 rounded-md text-sm font-semibold transition-colors duration-200",
                {
                  "bg-sky-300": currentFramework === "safari",

                  "bg-teal-300": currentFramework === "tailwind",

                  "bg-green-300": currentFramework === "vue",
                  "bg-orange-400": currentFramework === "svelte",
                }
              )}
            >
              Claim Ticket
            </button>
          </div>
          {/* Countdown timer */}
        </div>
      </div>
    </main>
  );
}

const FrameworkRotation = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  return (
    <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px]">
      {frameworks.map((name, index) => (
        <Image
          key={name}
          src={assets[name]}
          className={cn(
            "w-full h-full object-contain object-center absolute top-0 left-0 transition-all duration-300 ",
            currentFramework === name
              ? "opacity-100 transform-none"
              : index > frameworks.indexOf(currentFramework as Framework)
              ? "opacity-0 -translate-y-2"
              : "opacity-0 translate-y-2"
          )}
          alt="Framework logo"
          width="80"
          height="80"
        />
      ))}
    </div>
  );
};
