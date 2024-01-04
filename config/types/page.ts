import { NextComponentType } from 'next';
import { AppContext, AppProps } from 'next/app';
import { ParsedUrlQuery } from 'querystring';

export type TPageProps<T = object> = T & {
  query: ParsedUrlQuery;
  pathname: string;
};

export type TAppPage<P = AppProps<TPageProps>, IP = P> = NextComponentType<AppContext, IP, P>;
