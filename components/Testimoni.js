import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Глеб",
      image: "/assets/people-1.svg",
      city: "Уральск",
      country: "Казахстан",
      rating: "5.0",
      testimoni:
        "Спасибо за VPN, открываются все нужные русские сайты, такие как Гос Услуги, Петроэлектросбыт, фонд кап ремонта. Это классное подспорье. Спасибо большое за этот сервис! Рекомендую!",
    },
    {
      name: "Алекс",
      image: "/assets/people-2.svg",
      city: "Бишкек",
      country: "Кыргызстан",
      rating: "5.0",
      testimoni:
        "Сервис работает исправно. Использую уже несколько недель для доступа к рабочим сервисам, перешел на платный пакет, чтобы поддержать и меньше переключаться On/off.",
    },
    {
      name: "Екатерина",
      image: "/assets/people-4.svg",
      city: "Буэнос-Айрес",
      country: "Аргентина",
      rating: "5.0",
      testimoni:
        "Боже, я думала никогда больше не смогу зайти в приложение Альфы!! Спасибо Вам огромное!!!!!!",
    },
    {
      name: "Сева",
      image: "/assets/people-5.svg",
      city: "Астана",
      country: "Казахстан",
      rating: "5.0",
      testimoni:
        "Оставил заявку, на следующий день получил ключ. Всё настроил с первого раза, все отлично работает из Казахстана",
    },
    {
      name: "Евгений",
      image: "/assets/people-6.svg",
      city: "Тбилиси",
      country: "Грузия",
      rating: "5.0",
      testimoni:
        "Все отлично! Относительно быстро сгенерировали ключ. Подключение на ура. Мне то что надо - для подключения к госуслугам и прочего в РФ. Спасибо. Развития проекта удачного!",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
