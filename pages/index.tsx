import { GetStaticProps } from "next";
import flight from "@/assets/flight.jpg";
import hotel from "@/assets/hotel.jpg";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SearchForm from "@/components/home/search-form";
import Recommendations from "@/components/home/recommendations";
import NoSSR from 'react-no-ssr';  // Import NoSSR

export default function Home() {
  const [tab, setTab] = useState('flight')

  const t = useTranslations()
  return (
    <NoSSR>
      <div className="overflow-y-auto max-w-full">
        <Image
          src={flight}
          alt="flight"
          fill
          className={`object-cover bg-bottom w-full !h-[72vh] z-0 fixed top-0 opacity-0 duration-700 ${tab === 'flight' && 'opacity-100'}`}
        />
        <Image
          src={hotel}
          alt="hotel"
          fill
          className={`object-cover bg-bottom w-full !h-[72vh] z-0 fixed top-0 opacity-0 duration-700 ${tab === 'hotel' && 'opacity-100'}`}
        />
        <div className="relative">
          <SearchForm tab={tab} setTab={setTab} />
          <div className="w-full bg-white min-h-screen rounded-t-[32px] pt-10 px-4">
            <Recommendations />
          </div>
        </div>
      </div>
    </NoSSR>
  );
}

export const getStaticProps = (async (context) => {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  };
}) satisfies GetStaticProps;
