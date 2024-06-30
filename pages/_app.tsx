import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter as FontSans } from "next/font/google"

import { NextIntlClientProvider } from 'next-intl';
import { useRouter } from 'next/router';

import { cn } from "@/lib/utils"
import Header from "@/components/header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return <NextIntlClientProvider
    locale={router.locale}
    timeZone="Asia/Tashkent"
    messages={pageProps.messages}
  >
    <main
      className={cn(
        "min-h-screen bg-background !font-sans antialiased",
        fontSans.variable
      )}
    >
      <Header />
      <Component {...pageProps} />
    </main>
  </NextIntlClientProvider>
}