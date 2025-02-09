import { FC } from 'react';
import NextImage, { ImageProps } from 'next/image';

export const Image: FC<ImageProps> = ({ src, ...props }) => {
  const srcWithApi = `${process.env.API_URL}${src}`;

  return <NextImage src={srcWithApi} {...props} />;
};
