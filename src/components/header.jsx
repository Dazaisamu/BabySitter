import React from 'react'
import logo from '../img/logo.png'
const Header = () => {
  return (
    <>
      <div className="font-main font-medium flex justify-center py-2 w-full bg-[#ffffff69] text-[#2c2c2c]  duration-300  items-center flex-wrap">
        <ul className="flex px-24 duration-300">
          <li className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out">Главная</li>
          <li className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out">Контакты</li>
        </ul>
        <div className="w-[50px]">
          <img src={logo} alt="" />
        </div>
        <ul className="flex px-24">
          <li className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out">О нас</li>
          <li className="px-3 cursor-pointer hover:text-[#fa9684] duration-300 ease-in-out">Отзывы</li>
        </ul>
      </div>
    </>
  )
}

export default Header;