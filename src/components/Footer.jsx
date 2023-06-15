import React from 'react'
import { LinkStyle, LinkTitle } from '../styles/styleTexts'

const Footer = () => {
  return (
    <footer className=" px-[10vw] py-4">
      <div className="border-b-2 border-solid rounded-full w-full h-1 border-[#fa9684] my-8" />
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className={LinkTitle}>Company</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <a href="#" className={LinkStyle}>About</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={LinkTitle}>Help center</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={LinkTitle}>Legal</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={LinkTitle}>Download</h2>
            <ul className="mt-4">
              <li className="mb-4">
                <a href="#" className={LinkStyle}>iOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className={LinkStyle}>MacOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100  md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">© 2023 <a href="/">BabyNynya</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>

  )
}

export default Footer