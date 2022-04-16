import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface IIcon {
  name: string;
  className?: string;
}

interface IconData {
  props: {
    width: number;
    height: number;
  };
}

const getIcon = async (name: string, setIcon: Function) => {
  const importedIcon = await import(`../../public/icons/${name}.svg`);

  setIcon(importedIcon.default);
};

export const Icon = ({ name }: IIcon): any => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState<IconData>({
    props: {
      width: 16,
      height: 16,
    },
  });

  useEffect(() => {
    getIcon(name, setIcon);
  }, [name]);

  return icon?.props ? (
    <Image
      unoptimized
      src={`/icons/${name}.svg`}
      width={icon?.props?.width}
      height={icon?.props?.height}
      alt="icon"
      style={
        theme === "dark" ? { filter: "invert(1)" } : { filter: "invert(0)" }
      }
    />
  ) : (
    <Fragment />
  );
};
