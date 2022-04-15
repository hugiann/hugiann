import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

interface IIcon {
  name: string | JSX.Element;
  className?: string;
}

interface IconData {
  src: string;
  width?: number;
  height?: number;
}

const getIcon = async (name, setIcon) => {
  const importedIcon = await import(`../../public/icons/${name}.svg`);

  setIcon(importedIcon.default);
};

export const Icon = ({ name }: IIcon): any => {
  const { theme } = useTheme();
  const [icon, setIcon] = useState<IconData>({
    src: "",
  });

  useEffect(() => {
    getIcon(name, setIcon);
  }, [name]);

  return icon?.src ? (
    <Image
      src={icon.src}
      width={icon?.width}
      height={icon?.height}
      alt="icon"
      style={
        theme === "dark" ? { filter: "invert(1)" } : { filter: "invert(0)" }
      }
    />
  ) : (
    <Fragment />
  );
};
