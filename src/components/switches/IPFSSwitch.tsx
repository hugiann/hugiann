import React, { Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { determineIPFS } from "@/utils/routing";

export const IPFSSwitch = () => {
  const ipfsEnabled = determineIPFS();

  return (
    <>
      {ipfsEnabled ? (
        <button name="Turn off IPFS">
          <Image
            height="20"
            width="20"
            src="/icons/ipfs-enabled.svg"
            alt="ipfs enabled icon"
          />
        </button>
      ) : (
        <button name="Turn on IPFS">
          <Image
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
