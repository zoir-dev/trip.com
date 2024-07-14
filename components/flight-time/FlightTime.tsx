import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import BookCard from '../bookCard/BookCard';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from "next"
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button"
function FlightTime() {
    const t = useTranslations("flight-table")
    const [ showBookCards, setShowBookCards] = React.useState<boolean>(false)
    const [ btnText, setBtnText] = React.useState<string>(t("Select"))
    const handleSelectClick = () => {
        setShowBookCards(!showBookCards);
        setBtnText(!showBookCards ? t("Hide") : "Select")
      };
  return (
    <div>
        <div className='bg-white my-1 py-3 px-4'>
        <div className='flex gap-1 justify-start items-center'>
            <div className='bg-primary text-white p-1 rounded-sm'>
            <h5 className='md:text-sm text-xs'>{t("Shortest Duration")}</h5>              
            </div>
            <div className='bg-primary/10 text-primary p-1 rounded-sm flex gap-0.5 items-center'>
            <Image src={"/icons/baggages.png"} width={20} height={20} alt="baggages"/>
            <Image src={"/icons/suitcase.png"} width={20} height={20} alt="baggage"/>
            <h5 className='md:text-sm text-xs'>{t("Included")}</h5>              
            </div>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <div className='flex items-center gap-2'>
            <Image src={"/images/turkish.webp"} alt='turkish' width={50} height={50} className='lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] w-[30px] h-[30px] object-cover'/>
            <div>
                <HoverCard>
                <HoverCardTrigger asChild>
                    <p className='font-sans font-semibold lg:text-base md:text-sm text-xs'>Turkish Airlines</p>
                </HoverCardTrigger>
                <HoverCardContent>
                    <div className='flex items-center gap-2'>
                        <Image src={"/images/turkish.webp"} alt='turkish' width={20} height={20}/>
                        <p>Turkish Airlines TK371</p>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <Image src={"/images/turkish.webp"} alt='turkish' width={20} height={20}/>
                        <p>Turkish Airlines TK024</p>
                    </div>
                </HoverCardContent>
                </HoverCard>
                <div className='mt-2 flex gap-1 flex-wrap'>
                <HoverCard>
                    <HoverCardTrigger className='mt-2 flex gap-1 flex-wrap'>                      
                    <Image src={"/icons/leaf.png"} width={15} height={15} alt="leaf" className='lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] w-[10px] h-[10px]'/>
                    <Image src={"/icons/battery.png"} width={15} height={15} alt="battery" className='lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] w-[10px] h-[10px]'/>
                    <Image src={"/icons/leaf.png"} width={15} height={15} alt="leaf" className='lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] w-[10px] h-[10px]'/>
                    <Image src={"/icons/battery.png"} width={15} height={15} alt="battery" className='lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] w-[10px] h-[10px]'/>
                    <Image src={"/icons/leaf.png"} width={15} height={15} alt="leaf" className='lg:w-[15px] lg:h-[15px] md:w-[10px] md:h-[10px] w-[10px] h-[10px]'/>
                    </HoverCardTrigger>
                    <HoverCardContent>
                    <ScrollArea className='h-60'>
                        <div>
                        <p>TAS-IST</p>
                        <div className='flex items-center gap-2 mt-2'>
                            <Image src={"/images/turkish.webp"} alt='turkish' width={20} height={20}/>
                            <p>Turkish Airlines</p>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <Image src={"/icons/leaf.png"} alt='turkish' width={20} height={20}/>
                            <p className='text-primary'>Less CO₂ emissions -16%(-108 lbs)</p>
                        </div>
                        <p className='mt-2'>Ecanomy Class</p>
                        <div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                        </div>
                        </div>
                        <hr className='mt-2' />
                        <div className='mt-2'>
                        <p>TAS-IST</p>
                        <div className='flex items-center gap-2 mt-2'>
                            <Image src={"/images/turkish.webp"} alt='turkish' width={20} height={20}/>
                            <p>Turkish Airlines</p>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            <Image src={"/icons/leaf.png"} alt='turkish' width={20} height={20}/>
                            <p className='text-primary'>Less CO₂ emissions -16%(-108 lbs)</p>
                        </div>
                        <p className='mt-2'>Ecanomy Class</p>
                        <div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                            <div className='flex gap-2 items-center mt-2'>
                            <Image src={"/icons/battery.png"} alt='turkish' width={20} height={20}/>
                            <p>Inflight meals are available</p>
                            </div>
                        </div>
                        </div>
                    </ScrollArea>
                    
                    </HoverCardContent>
                </HoverCard>
                
                </div>
            </div>
            </div>

            <div className='flex items-center justify-between w-[33%] '>
            <div>
                <h3 className='font-sans font-semibold lg:text-2xl text-xs'>02:30</h3>
                <HoverCard>
                <HoverCardTrigger>
                    <h3 className='text-center text-gray-600 lg:text-base text-xs'>TAS T2</h3>
                </HoverCardTrigger>
                <HoverCardContent className='w-72'>
                    <p>Tashkent International Airport T2</p>
                </HoverCardContent>
                </HoverCard>
            </div>
            <div className=''>
                <h4 className='text-gray-600 text-center md:text-base text-xs'>36h 25m</h4>
                <div className='h-[1px] bg-primary'>
                </div>
                <HoverCard>
                <HoverCardTrigger>
                    <h4 className='text-gray-600 text-center md:text-base text-xs'>20h in Istanbul</h4>
                </HoverCardTrigger>
                <HoverCardContent className='w-80'>
                    <p>TAS Tashkent International Airport T2</p>
                    <p className='mt-2'>IST Istanbul Airport</p>
                    <div className='flex items-center mt-2 bg-gray-200 p-1'>
                    <Image src={"/icons/exchange.png"} alt='turkish' width={20} height={20}/>
                    <div className=''>
                        <p>Transfer in Istanbul 20h</p>
                        <p className='text-primary'>A visa or transit visa may be required</p>
                    </div>
                    </div>
                    <p className='mt-2'>TAS Tashkent International Airport T2</p>
                    <p className='mt-2'>IST Istanbul Airport</p>
                </HoverCardContent>
                </HoverCard>
            </div>
            <div>
                <h3 className='font-sans font-semibold lg:text-2xl text-xs'>17:55 <sup className='md:block hidden'>+1</sup></h3>
                <HoverCard>
                <HoverCardTrigger>
                    <h3 className='text-center text-gray-600 lg:text-base text-xs'>TPE T2</h3>
                </HoverCardTrigger>
                <HoverCardContent className='w-72'>
                    <p>Tashkent International Airport T2</p>
                </HoverCardContent>
                </HoverCard>
            </div>
            </div>

            <div className='flex md:gap-2 gap-1 items-center'>
            <h3 className='font-sans font-semibold lg:text-2xl text-xs'>$855</h3>
            <Button className='py-3' onClick={handleSelectClick}>{btnText} 
                <Image src={"/icons/down-arrow2.png"} width={20} height={20} alt="arrow-right"/>
            </Button>
            </div>
        </div>

        </div>
        {showBookCards &&
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0.5'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
        </div>
        }


    </div>    
  )
}

export default FlightTime

export const getStaticProps = (async (context) => {
    return {
      props: {
        messages: (await import(`../../messages/${context.locale}.json`)).default,
      },
    };
  }) satisfies GetStaticProps;
