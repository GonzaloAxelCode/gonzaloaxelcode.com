import siteMetadata from "@/shared/settings/sitemetdata";
import { FC } from "react";

type Props = {};

const Logo: FC<Props> = () => {
  return (
    <img
      className=" w-[40px] filter dark:invert sm:w-[40px] object-contain h-[50px]"
      src={siteMetadata.logoUrl}
      alt="logo"
    />
  );
};

export default Logo;
