import { Icon } from "@iconify/react/dist/iconify.js";

// import foto from "../../../public/dadan.jpg"

import foto from '~/images/dadan.png'
const IntroSection = () => {
  return (
    <div className="container relative">
      <div data-pattern="" className="absolute z-1 inset-0"></div>
      <div className="h-full sm:h-screen sm:px-24 py-24 flex sm:flex-row flex-col-reverse sm:gap-10 gap-6 sm:justify-between items-center justify-center">
       
        <div className="grid  sm:w-8/12 grid-cols-1 place-items-center sm:place-items-start sm:text-left text-center space-y-5 sm:space-y-4">
          <div>
            <h1 className="text-3xl sm:text-4xl">
              Hello Dunia <span>👋</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl text-text-950 font-bold">
              I'M <span className="text-text-800">DADAN</span><span className="text-primary-500"> HIDAYAT!</span>
            </h2>
          </div>
          <p className="sm:text-lg">
            Just a normal person who loves Web Development And Fullstack Lorem ipsum dolor, sit amet consectetu
          </p>
          <div className="sm:flex w-full grid-cols-2 grid gap-3 sm:gap-2">
            <a
              href="https://github.com/dadanhdyt"
              className="flex items-center hover:scale-105 dark:text-text-800 hover:ring-1 transition-all hover:ring-offset-2 bg-[#333] text-text-50 px-4 py-2 sm:py-2 rounded-lg shadow-lg"
            >
              <Icon icon={"mdi:github"} width={20} />
              <span>Github</span>
            </a>
            <a
              href="https://instagram.com/dadan.hidyt"
              className="flex items-center hover:scale-105 dark:text-text-800 hover:ring-1 transition-all hover:ring-offset-2 bg-[#E1306C] text-text-100 px-4 py-2 sm:py-2 rounded-lg shadow-lg"
            >
              <Icon icon={"mdi:instagram"} width={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://linkedin.com/dadanhdyt"
              className="flex items-center hover:scale-105 dark:text-text-800 hover:ring-1 transition-all hover:ring-offset-2 bg-[#0e76a8] text-text-100 px-4 py-2 sm:py-2 rounded-lg shadow-lg"
            >
              <Icon icon={"mdi:linkedin"} width={20} />
              <span>Linkedin</span>
            </a>
            <a
              href="javascript:alert('work!')"
              className="flex items-center hover:scale-105 dark:text-text-800 hover:ring-1 transition-all hover:ring-offset-2 bg-[#0088cc] text-text-100 px-4 py-2 sm:py-2 rounded-lg shadow-lg"
            >
              <Icon icon={"mdi:telegram"} width={20} />
              <span>Telegram</span>
            </a>
          </div>
        </div>
        <div className="">
          <img  className="w-[200px] rounded-full sm:rounded-md sm:ring-0  sm:ring-offset-0 ring-2 ring-offset-2 sm:w-[300px]"
            src={foto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default IntroSection;
