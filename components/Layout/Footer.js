import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Telegram from "../../public/assets/Icon/telegram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-3 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            При возникновении трудностей или вопросов – обращайтесь за помощью в Telegram.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <a href="https://t.me/imkowalenko" target="_blank"><Telegram className="h-6 w-6" /></a>
            </div>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} - сайт разработан веб-студией <a href="https://kowalenko.net/" target="_blank">kowalenko.net</a></p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Полезное</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              <a href="https://openvpn.net/vpn-client/" target="_blank">Скачать OpenVPN</a>
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Политика</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Публичная оферта
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Политика обработки персональных данных
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Соглашение об использовании платной подписки
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Бонусы</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Стать партнёром
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
