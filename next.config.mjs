import * as dotenv from 'dotenv';

dotenv.config();

/** @type {import('next').NextConfig} */
export default () => {
  const plugins = [];

  return plugins.reduce((acc, next) => next(acc), {
    compiler: {
      styledComponents: true,
    },
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
    env: {
      API_URL: process.env.API_URL,
    },
  });
};
