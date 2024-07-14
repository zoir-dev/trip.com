import React, { useEffect, useState } from 'react'
import { GetStaticProps } from "next"
import { useTranslations } from 'next-intl';

function Departing() {
    const t = useTranslations("flight-table");
    const [isClient, setIsClient] = useState<boolean>(false);
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        // Mark the component as mounted on the client
        setIsClient(true);
    
        // Update time every second
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, []);
    
      const day = time.getDate();
      const month = time.getMonth() + 1;
      const year = time.getFullYear();
      const hour = time.getHours();
      const minute = time.getMinutes();
      const seconds = time.getSeconds()
  return (
    <div>
      <div className='bg-primary py-4 px-3 flex justify-between items-center rounded-t-md'>
        <h1 className='text-white font-sans font-medium text-base'>{t("Departing to Taipei")}</h1>
        {isClient && (
          <p className='text-white font-sans text-base'>
            {`*${t("Last updated")}: ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}, ${day}/${month}/${year}`}
          </p>
        )}
      </div>
    </div>
  )
}

export default Departing

export const getStaticProps = (async (context) => {
    return {
      props: {
        messages: (await import(`../../messages/${context.locale}.json`)).default,
      },
    };
  }) satisfies GetStaticProps;
