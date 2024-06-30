import { createSharedPathnamesNavigation } from "next-intl/navigation";
// import {locales, /* ... */} from './config';
const locales = ["uzb", "en", "ru"];

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales,localePrefix:"always",domains:[] });
