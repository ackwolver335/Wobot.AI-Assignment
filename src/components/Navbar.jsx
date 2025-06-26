import React from 'react'
import { BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    // method for toggleMenu
    const toggleMenu = () => {
        document.querySelector(".menuList").classList.toggle("xsz:translate-x-40");
    }

    return (
        <div className="z-10 flex flex-row fixed right-0 left-0 top-0 bg-linear-60 justify-between from-gradOne xsz:items-center lg:items-start to-gradTwo xsz:py-3 xsz:px-4 sm:py-4 lg:px-6 xl:py-5 xsz:shadow-md lg:shadow-xl xsz:rounded-b-md lg:rounded-b-xl">

            {/* Heading and Title Block */}
            <div className="headBlock flex flex-col items-start xsz:gap-2 cursor-pointer">

                <div className="textNIcon flex flex-row items-center xsz:gap-2 lg:gap-3">
                    <BookOpen className="text-white xsz:w-6 xsz:h-6 xl:w-8 xl:h-8" />
                    <h3 className="text-white font-merriweather font-bold sm:text-lg lg:text-2xl xl:text-3xl"> Delicious Recipe Book </h3>
                </div>

                <p className="xsz:text-sm font-poppins text-white xsz:hidden xl:block">
                    Discover amazing recipes for every occasion
                </p>

            </div>

            {/* Menu Icon Button */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list text-white xsz:w-6 sm:w-7 md:hidden" viewBox="0 0 16 16" onClick={toggleMenu}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>

            {/* Lists regarding different Navigation */}
            <ul className="menuList flex xsz:flex-col xsz:absolute xsz:top-16 sm:top-18 xsz:right-4 xsz:bg-linear-120 xsz:from-gradOne xsz:to-gradTwo xsz:py-2 xsz:px-3 xsz:text-sm sm:px-4 sm:text-base xsz:rounded-lg xsz:shadow-lg md:bg-none md:relative md:top-0 right-0 md:shadow-none md:flex-row items-center xsz:gap-2 md:gap-4 lg:py-1 text-white font-poppins xsz:translate-x-40 md:translate-x-0 ease-in duration-250">
                <Link to="/" className="md:hover:underline md:hover:underline-offset-5"> <li> Home </li> </Link>
                <a href="#" className="md:hover:underline md:hover:underline-offset-5"> <li> Categories </li> </a>
                <a href="#" className="md:hover:underline md:hover:underline-offset-5"> <li> Favourite </li> </a>
                <a href="#" className="md:hover:underline md:hover:underline-offset-5"> <li> About </li> </a>
            </ul>

        </div>
    )
}
