import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Select, SelectContent, SelectGroup, SelectTrigger, SelectValue, SelectItem } from '@/components/ui/select';
import { ScrollArea } from '@/components/ui/scroll-area';
import BookCard from '../bookCard/BookCard';

function FlightTable() {
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState<boolean>(false);
  const [position, setPosition] = React.useState<string>("bottom")
  const [ selected, setSelected] = React.useState<string>("")
  const [ showBookCards, setShowBookCards] = React.useState<boolean>(false)
  const [ btnText, setBtnText] = React.useState<string>("Select")

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
  const seconds = time.getSeconds();

  const handleClick = (card: string) => {
      setSelected(card)
  }

  const handleSelectClick = () => {
    setShowBookCards(!showBookCards);
    setBtnText(showBookCards ? "Hide" : "Select")
  };

  return (
    <ScrollArea className='w-full'>
      <div className='bg-primary py-4 px-3 flex justify-between items-center rounded-t-md'>
        <h1 className='text-white font-sans font-medium text-base'>Departing to Taipei</h1>
        {isClient && (
          <p className='text-white font-sans text-base'>
            {`*Last updated: ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}, ${day}/${month}/${year}`}
          </p>
        )}
      </div>

      <div className='flex bg-white mt-1 cursor-pointer text-center'>
        <div className={`md:w-[20%] w-[26%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'recommended' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('recommended')}>
          <h3 className='font-sans font-semibold md:font-medium md:text-base text-[12px]'>Recommended</h3>
          <p>$493</p>
        </div>
        <div className={`md:w-[20%] w-[22%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'lowest-price' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('lowest-price')}>
          <h3 className='font-sans font-semibold md:font-medium md:text-base text-[12px]'>Lowest Price</h3>
          <p>$468</p>
        </div>
        <div className={`w-[18%] md:w-[20%] flex flex-col justify-center items-center hover:text-primary xl:px-7 py-2 border-x ${selected === 'shortest-duration' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('shortest-duration')}>
          <h3 className='font-sans font-semibold md:font-medium  md:text-base text-[12px]'>Shortest Duration</h3>
          <p>$1,059</p>
        </div>
        <div className={`md:w-[18%] w-[20%] flex flex-col justify-center items-center hover:text-primary xl:px-10 py-2 border-x ${selected === 'short-by' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('short-by')}>
            <Select>
                <SelectTrigger>
                    <SelectValue className='font-sans font-semibold md:font-medium  md:text-base text-xs' placeholder="Sort By"/>
                    <Image className='cursor-pointer mx-auto' src="/icons/down-arrow.png" width={20} height={20} alt="down-arrow" />
                </SelectTrigger>
                <SelectContent className="w-56">                    
                    <SelectGroup>
                      <SelectItem value="Departure (Earliest) $708">Departure (Earliest) $708</SelectItem>
                      <SelectItem value="Departure (Latest) $1,357">Departure (Latest) $1,357</SelectItem>
                      <SelectItem value="Arrival (Earliest) $708">Arrival (Earliest) $708</SelectItem>
                      <SelectItem value="Arrival (Latest) $771">Arrival (Latest) $771</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
        <div className={`w-[22%] flex flex-col justify-center items-center hover:text-primary xl:px-10 py-2 border-x ${selected === 'create-price-alert' ? 'border-b-[1px] border-primary' : ''}`} onClick={() => handleClick('create-price-alert')}>
          <h3 className='font-sans font-semibold md:font-medium  md:text-base text-[12px]'>Create Price Alert</h3>
        </div>
      </div>

      <div>
        <div className='bg-white my-1 py-3 px-4'>
          <div className='flex gap-1 justify-start items-center'>
            <div className='bg-primary text-white p-1 rounded-sm'>
              <h5 className='md:text-sm text-xs'>Shortest Duration</h5>              
            </div>
            <div className='bg-primary/10 text-primary p-1 rounded-sm flex gap-0.5 items-center'>
              <Image src={"/icons/baggages.png"} width={20} height={20} alt="baggages"/>
              <Image src={"/icons/suitcase.png"} width={20} height={20} alt="baggage"/>
              <h5 className='md:text-sm text-xs'>Included</h5>              
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
              <Button className='py-3 ' onClick={handleSelectClick}>Select 
                <Image src={"/icons/down-arrow2.png"} width={20} height={20} alt="arrow-right"/>
              </Button>
            </div>
          </div>

        </div>
        { showBookCards &&
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0.5'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
          </div>
        }
      </div>
    </ScrollArea>
  );
}

export default FlightTable;
