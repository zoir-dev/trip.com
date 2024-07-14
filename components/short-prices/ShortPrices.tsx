import React from 'react'
import { GetStaticProps } from "next"
import { useTranslations } from 'next-intl'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from "next/image"
import { PaymentModal } from '../payment/PaymentModal';
function ShortPrices() {
    const t = useTranslations("flight-table")
    const [ selected, setSelected] = React.useState<string>("")
    
  const handleClick = (card: string) => {
    setSelected(card)
 }

  return (
    <div>
      <div className='flex bg-white mt-1 cursor-pointer text-center'>
        <div className={`md:w-[20%] w-[26%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'recommended' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('recommended')}>
          <h3 className='font-sans font-semibold md:font-medium md:text-base text-[12px]'>{t("Recommended")}</h3>
          <p>$493</p>
        </div>
        <div className={`md:w-[20%] w-[22%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'lowest-price' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('lowest-price')}>
          <h3 className='font-sans font-semibold md:font-medium md:text-base text-[12px]'>{t("Lowest Price")}</h3>
          <p>$468</p>
        </div>
        <div className={`w-[18%] md:w-[20%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'shortest-duration' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('shortest-duration')}>
          <h3 className='font-sans font-semibold md:font-medium  md:text-base text-[12px]'>{t("Shortest Duration")}</h3>
          <p>$1,059</p>
        </div>
        <div className={`md:w-[18%] w-[20%] flex flex-col justify-center items-center hover:text-primary xl:px-10 py-2 border-x ${selected === 'short-by' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('short-by')}>
            <Select>
                <SelectTrigger>
                    <SelectValue className='font-sans font-semibold md:font-medium  md:text-base text-xs' placeholder={t("Sort By")}/>
                    <Image className='cursor-pointer mx-auto' src="/icons/down-arrow.png" width={20} height={20} alt="down-arrow" />
                </SelectTrigger>
                <SelectContent className="w-56">                    
                    <SelectGroup>
                      <SelectItem value="Departure (Earliest) $708">{t("Departure (Earliest) $708")}</SelectItem>
                      <SelectItem value="Departure (Latest) $1,357">{t("Departure (Latest) $1357")}</SelectItem>
                      <SelectItem value="Arrival (Earliest) $708">{t("Arrival (Earliest) $708")}</SelectItem>
                      <SelectItem value="Arrival (Latest) $771">{t("Arrival (Latest) $771")}</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className={`w-[22%] flex flex-col justify-center items-center hover:text-primary xl:px-10 py-2 border-x ${selected === 'create-price-alert' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('create-price-alert')}>
          <h3 className='font-sans font-semibold md:font-medium  md:text-base text-[12px]'><PaymentModal /> {t("Create Price Alert")}</h3>
        </div>
      </div>
    </div>
  )
}

export default ShortPrices

export const getStaticProps = (async (context) => {
    return {
      props: {
        messages: (await import(`../../messages/${context.locale}.json`)).default,
      },
    };
  }) satisfies GetStaticProps;
