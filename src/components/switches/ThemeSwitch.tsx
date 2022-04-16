import React, { Fragment } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <>
      {resolvedTheme === "light" ? (
        <button name="Turn on the light" onClick={() => setTheme("dark")}>
          <Image
            height="20"
            width="20"
            src="/icons/darkmode.svg"
            alt="light mode icon"
          />
        </button>
      ) : (
        <button name="Turn off the light" onClick={() => setTheme("light")}>
          <Image
            height="20"
            width="20"
            src="/icons/lightmode.svg"
            alt="dark mode icon"
            style={{ filter: "invert(1)" }}
          />
        </button>
      )}
    </>
  );
};
