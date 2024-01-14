import { Icon } from "@iconify/react/dist/iconify.js";
import AppLogo from "./app-logo";

export default function Footer() {
  return (
    <footer className="mt-10 py-10 border-t border-t-primary-200">
      <div className="container flex flex-col gap-500">
        <div className="flex gap-16 sm:gap-5 sm:flex-row flex-col">
          <div className="sm:max-w-sm text-left w-full">
            <AppLogo/>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 sm:gap-4 place-items-start sm:place-content-start sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-800 uppercase">Project</span>
                    <ul className="leading-loose">
                        <li><a href="" className="text-text-700 hover:underline">Website PPDB</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Sitem Informasi RT</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Siakad SMK</a></li>
                        <li><a href="" className="text-text-700 hover:underline">AI Content Generator</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Deteksi GEMPA IOT</a></li>
                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="font-bold text-text-800 uppercase">My Work</span>
                    <ul className="leading-loose">
                        <li><a href="" className="text-text-700 hover:underline">Freelance Web Development</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Content Creator</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Siakad SMK</a></li>
                        <li><a href="" className="text-text-700 hover:underline">AI Content Generator</a></li>
                        <li><a href="" className="text-text-700 hover:underline">Deteksi GEMPA IOT</a></li>
                    </ul>
                </div>
               
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center mt-5">
            <span className="flex items-center gap-1">Copyright 2024 - Build With <Icon className="text-red-500 text-lg" icon={"mdi:heart"}></Icon>  Dadan hidayat</span>
        </div>
      </div>
    </footer>
  );
}
