import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ButtonPrimary = ({ children, addClass }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [showGreetingsl, setShowGreetings] = React.useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('default_', 'template_a74uups', form.current, 'user_fO3AyiyXbeULVSmOOKzg0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={
          "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
          addClass
        }
      >
        {children}
      </button>

      {showModal ? (
        <>
          <div
            className="bg-gradient-to-b from-white-300 to-white-500 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="bg-gradient-to-b from-white-300 to-white-500 relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <form ref={form} onSubmit={sendEmail}>
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Закажите ключ
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Заполните форму и получите персональный <strong>ключ</strong> на Ваш E-mail.
                    </p>

                    <div className="mb-3 pt-0">
                      <input name="client" id="client" type="text" placeholder="Имя и фамилия" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                    </div>

                    <div className="mb-3 pt-0">
                      <input name="email" id="email" type="text" placeholder="E-mail" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                    </div>

                    <div className="mb-3 pt-0">
                      <input name="social" id="social" type="text" placeholder="Ссылка на аккаунт в социальной сети" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                    </div>

                    <div className="mb-3 pt-0">
                      <p className="my-4 text-slate-500 text-base leading-relaxed">
                        Тарифный план:
                      </p>
                      <input name="plan" id="plan" type="text" placeholder="Пробный / Стандартный / Премиальный" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                    </div>



                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-regular uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Закрыть
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-green-600 text-white-500 font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit" id="button"
                      onClick={() => setShowModal(false)}
                    >
                      Получить ключ
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ButtonPrimary;
