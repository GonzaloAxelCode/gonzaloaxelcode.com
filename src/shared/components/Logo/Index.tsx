import { FC } from "react";

type Props = {};

const Logo: FC<Props> = () => {
  return (
    <img
      className=" w-[60px] object-contain h-[50px]"
      src="https://res.cloudinary.com/djzt16xpp/image/upload/v1698185915/Colorful_Modern_Infinity_Technology_Free_Logo_oo4mlq.png"
      alt="logo"
    />
  );
};

export default Logo;
