import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import settings from "config/settings";
import { determineIPFS } from "@/utils/routing";

export const IPFSSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const ipfsEnabled = determineIPFS();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {ipfsEnabled ? (
        <button
          name="Turn off IPFS"
          onClick={() => {
            window.location.hostname = settings.siteAddress;
          }}
        >
          <Image
            unoptimized
            height="20"
            width="20"
            src="/icons/ipfs-enabled.svg"
            alt="ipfs enabled icon"
          />
        </button>
      ) : (
        <button
          name="Turn on IPFS"
          onClick={() => {
            window.location.hostname = settings.siteIPFSAddress;
          }}
          className="invert-0 dark:invert"
        >
          <Image
            unoptimized
            height="20"
            width="20"
            src="/icons/ipfs.svg"
            alt="ipfs disabled icon"
          />
        </button>
      )}
    </>
  );
};
