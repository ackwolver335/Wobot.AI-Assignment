import React from 'react'

export default function Footer() {
    return (
        <div className="bg-footBG xsz:px-5 xsz:py-4 lg:px-8 lg:py-6 xl:py-10 flex flex-col items-center xsz:gap-4 lg:gap-3 xl:gap-6">

            {/* Block regarding Links & Redirection */}
            <div className="flex xsz:flex-col xsz:items-start w-fit md:justify-evenly md:flex-row xsz:gap-5 lg:gap-4">

                {/* Heading & Intro Block */}
                <div className="flex flex-col items-start xsz:gap-3 lg:gap-4">

                    <div className="flex flex-col items-start xsz:gap-1 lg:gap-2">
                        <h3 className="font-merriweather font-semibold xsz:text-xl lg:text-2xl text-footFT"> Delicious Recipe Book </h3>
                        <p className="font-inter font-medium xsz:text-sm lg:text-base text-footFT">
                            Your source for amazing recipes and culinary inspiration.
                        </p>
                    </div>

                    <div className="flex flex-row items-center xsz:gap-2 lg:gap-3">

                        {/* Twitter Icon */}
                        <a href="https://twitter.com/spoonacular" className="xsz:bg-footFT xsz:p-1 lg:p-2 xsz:rounded-md active:scale-95 hover:scale-105 ease-in duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x xsz:w-5 lg:w-6 text-footBG/80 hover:text-footBG ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                            </svg>
                        </a>

                        {/* Discord Icon */}
                        <a href="https://discord.gg/EkYYnVF" className="xsz:bg-footFT xsz:p-1 lg:p-2 xsz:rounded-md active:scale-95 hover:scale-105 ease-in duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord xsz:w-5 lg:w-6 text-footBG/80 hover:text-footBG ease-in duration-150" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                            </svg>
                        </a>

                    </div>

                </div>

                {/* Quick Links Block */}
                <div className="flex flex-col items-start xsz:gap-2 lg:gap-4">

                    {/* Heading for Quick Links */}
                    <h3 className="font-merriweather font-semibold xsz:text-lg lg:text-xl xl:text-2xl text-footFT"> Quick Links </h3>

                    <u className="flex flex-col items-start xsz:gap-1 list-none no-underline font-inter font-medium">
                        <li className="xsz:text-sm lg:text-base active:text-footFT text-footFT/70 cursor-pointer hover:text-footFT ease-in duration-150"> Categories </li>
                        <li className="xsz:text-sm lg:text-base active:text-footFT text-footFT/70 cursor-pointer hover:text-footFT ease-in duration-150"> Favourite </li>
                        <li className="xsz:text-sm lg:text-base active:text-footFT text-footFT/70 cursor-pointer hover:text-footFT ease-in duration-150"> About </li>
                    </u>

                </div>

                {/* Email Navigation */}
                <div className="flex flex-col items-start xsz:gap-2 lg:gap-3">
                    <h3 className="font-merriweather font-semibold xsz:text-lg lg:text-xl xl:text-2xl text-footFT"> NewLetter </h3>
                    <p className="font-inter font-medium xsz:text-sm lg:text-base text-footFT">
                        Subscribe to get new recipes delivered to your inbox.
                    </p>

                    {/* Block regarding Email & Content */}
                    <div className="flex flex-row items-center gap-0">
                        <input type="email" placeholder="Your Email" className="font-poppins w-2/3 font-medium xsz:text-sm lg:text-base text-footBG bg-footFT outline-none xsz:px-3 xsz:py-1 xsz:rounded-l-md lg:rounded-l-lg" />
                        <button type="button" className="font-poppins font-medium xsz:text-sm w-fit lg:text-base text-white bg-gradOne xsz:px-3 xsz:py-1 xsz:rounded-r-md lg:rounded-r-lg active:scale-95 hover:scale-105 ease-in duration-150 cursor-pointer"> Subscribe </button>
                    </div>

                </div>

            </div>

            <div className="bg-footFT/70 w-full xsz:h-[2px] lg:w-5/6 rounded-full shadow-lg"></div>

            <p className="xsz:text-sm lg:text-base font-poppins text-footFT">
                © 2025 Delicious Recipe Book. All recipes are created with love.
            </p>

        </div>
    )
}
