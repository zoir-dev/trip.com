import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dates from "../../pages/flights/date.json";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";

const Carousel = () => {
    const t = useTranslations("flights");
    // State to track the index of the clicked div and its price
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
    };

    // Handle the click and store the index and price
    const handleClick = (index: number) => {
        setClickedIndex(index);
    }

    return (
        <div className="slider-container mt-20 bg-white">
            <Slider {...settings}>
                {dates?.dates.map((date, index) => (
                    <div key={index} onClick={() => handleClick(index)} className="border-x cursor-pointer">
                        <h3 className="text-center font-bold">{date.date}</h3>
                        <p className="text-center">
                            {clickedIndex === index ? date.price : t("view")}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;

export const getStaticProps = (async (context) => {
    return {
        props: {
            messages: (await import(`../../messages/${context.locale}.json`)).default,
        },
    };
}) satisfies GetStaticProps;
