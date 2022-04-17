import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "components/Button";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {resolvedTheme === "light" ? (
        <Button
          name="Turn off the light"
          onClick={() => setTheme("dark")}
          className="invert-0"
        >
          <Image
            unoptimized
            height="20"
            width="20"
            src="/icons/darkmode.svg"
            alt="dark mode icon"
          />
        </Button>
      ) : (
        <Button
          name="Turn on the light"
          onClick={() => setTheme("light")}
          className="invert"
        >
          <Image
            unoptimized
            height="20"
            width="20"
            src="/icons/lightmode.svg"
            alt="light mode icon"
          />
        </Button>
      )}
    </>
  );
};
