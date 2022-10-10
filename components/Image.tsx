import NextImage, { ImageProps } from "next/image";

const Image = (props: ImageProps) => {
  return <NextImage loader={({ src }) => `./${src}`} {...props}></NextImage>;
};

export default Image;
