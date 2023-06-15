import React from 'react';
import { ButtonMain, ThirtyTitle } from '../styles/styleTexts'

export const Thirty = () => {
  return (
    <section className="my-[140px] bg-blockThirty bg-no-repeat bg-cover bg-center flex justify-center">
      <div className="bg-[#fff] rounded-md w-[550px] p-8 m-20 shadow-md shadow-gray-400">
        <div>
          <h1 className={ThirtyTitle}>У вас остались вопросы?</h1>
          <p className="font-light text-[15px] mt-4">Просто напишите нам, мы будем рады ответить на ваши вопросы.</p>
        </div>
        <div className="my-8 leading-9">
          <div>
            <p className="py-2 text-[15px]">Имя</p>
            <input type="text" placeholder="Введите ваше имя" className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Электронная почта</p>
            <input type="text" placeholder="Ваша электронная почта" className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Телефон</p>
            <input type="text" placeholder="Формат +7 999 777 00 00" className="w-full px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <div>
            <p className="py-2 text-[15px]">Сообщение</p>
            <textarea type="text" maxLength="80" placeholder="Ваше сообщение (Максимум 80 символов)" className="resize-none w-full h-[200px] px-2 py-2 border-[1px] rounded-sm text-[15px] border-[#cccccc] outline-[#afafaf]" />
          </div>
          <button type="submit" value="Send Request" className={ButtonMain}>Отправить</button>
        </div>
      </div>

    </section>
  )
}
